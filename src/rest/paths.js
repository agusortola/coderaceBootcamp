const BASE_URL = 'https://neinstein-backend.herokuapp.com';

const QUESTIONS = () => BASE_URL + '/questions';

const QUESTION = questionId => QUESTIONS() + '/' + questionId;

const ANSWER = questionId => QUESTION(questionId) + '/answer';

export default {
    QUESTIONS, QUESTION, ANSWER
}