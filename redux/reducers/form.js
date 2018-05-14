import {
    SET_FORM_ISSUE_ASSIGNEE,
    SET_FORM_ISSUE_COMMENT,
    SET_FORM_ISSUE_STATE,
    SET_FORM_ISSUE_TITLE,
} from '../actionTypes'

export default (state = {
    issue: {
        assignee: null,
        state: null,
        comment: '',
        title: '',
    },
}, action) => {
    switch (action.type) {
        case SET_FORM_ISSUE_ASSIGNEE:
            return {
                ...state, issue: {
                    ...state.issue,
                    assignee: action.payload
                }
            }
        case SET_FORM_ISSUE_TITLE:
            return {
                ...state, issue: {
                    ...state.issue,
                    title: action.payload
                }
            }
        case SET_FORM_ISSUE_COMMENT:
            return {
                ...state, issue: {
                    ...state.issue,
                    comment: action.payload
                }
            }
        case SET_FORM_ISSUE_STATE:
            return {
                ...state, issue: {
                    ...state.issue,
                    state: action.payload
                }
            }
        default:
            return state
    }
}