// imports js files
import { handleSubmit } from './js/handleSubmit'
import { postData } from './js/postData'
import { inputChecker } from './js/inputChecker'
import { dateDiff } from './js/dateDiff'
import { updateUI } from './js/updateUI'

// import scss files
import './styles/resets.scss';
import './styles/results.scss';
import './styles/base.scss';
import './styles/form.scss';
import './styles/header.scss';
import './styles/footer.scss';

document.getElementById('tripForm').addEventListener('submit', handleSubmit);

// export js files
export {
    handleSubmit,
    postData,
    dateDiff,
    inputChecker,
    updateUI
}