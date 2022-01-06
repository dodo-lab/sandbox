module.exports = {
  prompt: ({ prompter, args }) =>
    prompter
      .prompt({
        type: 'input',
        name: 'class_name',
        message: ''
      })
      .then(({class_name}) => {
        if( class_name.indexOf('Hoge') === -1 ) {
          return {class_name}
        }
        else {
          console.error('[Failed]Invalid class_name')
          return Promise.reject({arrow: false})
        }
      })
}