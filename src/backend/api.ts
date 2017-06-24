let util = require('util');
let {Router} = require('express');

// Our API for demos only
import {fakeDataBase} from './db';
import {fakeDemoRedisCache} from './cache';

// you would use cookies/token etc
let USER_ID = 'f9d98cf1-1b96-464e-8755-bcc2a5c09077'; // hardcoded as an example

// Our API for demos only
export function serverApi(req, res) {
	let key = USER_ID + '/data.json';
	let cache = fakeDemoRedisCache.get(key);
	if (cache !== undefined) {
		console.log('/data.json Cache Hit');
		return res.json(cache);
	}
	console.log('/data.json Cache Miss');
	fakeDataBase.get()
		.then(data => {
			fakeDemoRedisCache.set(key, data);
			return data;
		})
	.then(data => res.json(data));
}

// todo API

let COUNT = 4;
let TODOS: object[] = [
	{ id: 0, value: 'finish example', created_at: new Date(), completed: false },
	{ id: 1, value: 'add tests',      created_at: new Date(), completed: false },
	{ id: 2, value: 'include development environment', created_at: new Date(), completed: false },
	{ id: 3, value: 'include production environment',  created_at: new Date(), completed: false }
];

export function createTodoApi() {
	let router = Router()
	router.route('/todos')
		.get(function(req, res) {
			console.log('GET');
			// 70ms latency
			setTimeout(function() {
				res.json(TODOS);
			}, 0);
		})
		.post(function(req, res) {
			console.log('POST', util.inspect(req.body, {colors: true}));
			let todo = req.body;
			if (todo) {
				TODOS.push({
					value: todo.value,
					created_at: new Date(),
					completed: todo.completed,
					id: COUNT++
				});
				return res.json(todo);
			}
			return res.end();
		});
	router.param('todo_id', function(req, res, next, todo_id) {
		// ensure correct prop type
		let id = Number(req.params.todo_id);
		try {
			let todo = TODOS[id];
			req.todo_id = id;
			req.todo = TODOS[id];
			next();
		} catch (e) {
			next(new Error('failed to load todo'));
		}
	});
	router.route('/todos/:todo_id')
		.get(function(req, res) {
			console.log('GET', util.inspect(req.todo, {colors: true}));
			res.json(req.todo);
		})
		.put(function(req, res) {
			console.log('PUT', util.inspect(req.body, {colors: true}));
			let index = TODOS.indexOf(req.todo);
			let todo = TODOS[index] = req.body;
			res.json(todo);
		})
		.delete(function(req, res) {
			console.log('DELETE', req.todo_id);
			let index = TODOS.indexOf(req.todo);
			TODOS.splice(index, 1);
			res.json(req.todo);
		});
	return router;
};