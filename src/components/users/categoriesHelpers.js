import axios from 'axios'

function updateCategory(cat) {
  return new Promise(function(resolve, reject) {
    axios
      .post('http://localhost:3010/products/updateCategory', {
        category: {
          id: cat.id,
          Desc_Cat: cat.Desc_Cat,
        },
      })
      .then((response) => {
        resolve('OK')
      })
      .catch(function(error) {
        reject(error)
        // console.log('error Actualizando ' + error)
      })
  })
}

function deleteCategory(cat) {
  return new Promise(function(resolve, reject) {
    axios
      .post('http://localhost:3010/products/deleteCategory', {
        category: {
          id: cat.id,
        },
      })
      .then((response) => {
        resolve('OK')
      })
      .catch(function(error) {
        reject(error)
        // console.log('error Eliminando ' + error)
      })
  })
}

export { updateCategory, deleteCategory }
