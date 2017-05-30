import { combineReducers } from 'redux'

const globalReducer = (state = {
	userId: 129,
	gitlabUserId: 4,
	fetching: false,
}, action) => {
	switch (action.type) {
		case 'SET_USER': return Object.assign({}, state, {
			userId: action.payload,
		})
		case 'SET_GITLAB_USER': return Object.assign({}, state, {
			gitlabUserId: action.payload,
		})
		case 'IS_FETCHING':  return Object.assign({}, state, {
			fetching: action.payload,
		})
		default: return state
	}
}
const redmineReducer = (state = {
	issues: [],
	issue: {},
	statuses: [],
}, action) => {
	switch (action.type) {
		case 'SET_ISSUES': return Object.assign({}, state, {
			issues: action.payload,
		})
		case 'SET_ISSUE':  return Object.assign({}, state, {
			issue: action.payload,
		})
		case 'SET_STATUSES': return Object.assign({}, state, {
			statuses: action.payload,
		})
		default: return state
	}
}
const gitlabReducer = (state = {
	boards: [],
	issues: [],
	myTasksOnly: true,
}, action) => {
	switch (action.type) {
		case 'MY_TASKS_TOGGLE': return Object.assign({}, state, {
			myTasksOnly: !state.myTasksOnly,
		})
		case 'SET_BOARDS': return Object.assign({}, state, {
			boards: action.payload,
		})
		case 'SET_GITLAB_ISSUES': return Object.assign({}, state, {
			issues: action.payload,
		})
		default: return state
	}
}


export default combineReducers({
	global: globalReducer,
	redmine: redmineReducer,
	gitlab: gitlabReducer,
})