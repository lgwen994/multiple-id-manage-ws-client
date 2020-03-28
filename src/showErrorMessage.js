import { MessageBox } from 'element-ui';
export function showErrorMessage(error) {
    let message;
    if (error.response) {
        message = error.response.data.message;
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
    }
    else {
        message = error;
        console.log(error.config);
    }
    MessageBox.alert(`Error is occured <br>${message}`, 'Error', {
        ConfirmButtonText: 'OK',
        type: 'error',
        dangerouslyUseHTMLString: true
    });
}
