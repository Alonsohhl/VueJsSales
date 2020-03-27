import axios from 'axios'
import { API_URL } from '@src/app.config'

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

function deleteClient(clientId) {
  return new Promise(function(resolve, reject) {
    axios
      .post(API_URL + `clients/delete?id=${clientId}`)
      .then((response) => {
        resolve('OK')
      })
      .catch(function(error) {
        reject(error)
      })
  })
}

export { updateCategory, deleteClient }
