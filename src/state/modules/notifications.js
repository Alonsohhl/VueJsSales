export const state = {
  notifications: ['Noti de Prueba'],
}
export const actions = {
  pushNotification({ state }, { value, type }) {
    state.notificatons.push(value)
  },
}
