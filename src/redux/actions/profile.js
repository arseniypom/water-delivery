import axios from 'axios'

export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload,
})

export const fetchProfileData = (id) => (dispatch) => {
  dispatch(setLoaded(false))
  axios.get(`/api/profile/data?id=${id}`).then(({data}) => {
    dispatch(setLoaded(true))
    dispatch(setProfileData(data))
  })
}

export const setProfileData = (data) => ({
  type: 'SET_PROFILE_DATA',
  payload: data
});

export const resetProfileData = () => ({
  type: 'RESET_PROFILE_DATA',
});