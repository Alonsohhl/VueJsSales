import axios from 'axios'
import appConfig from '@src/app.config'

function updateAdmin(cat) {
  return new Promise(function(resolve, reject) {
    axios
      .post(appConfig + '/products/updateCategory', {
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

function deleteAdmin(id) {
  return new Promise(function(resolve, reject) {
    axios
      .post(`${appConfig.API_URL}users/delete?id=${id}`)
      .then((response) => {
        resolve('OK')
      })
      .catch(function(error) {
        reject(error)
      })
  })
}

export { updateAdmin, deleteAdmin }
