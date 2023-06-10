import router from '@/router'
import AuthService from '@/services/auth.service'
import UserService from '@/services/user.service'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    accountData: null,
    refreshToken: null,
    isRegisterFinish: false,
  }),
  actions: {
    async login(user) {
      // Temporary Bypass
      if (user.email === 'bypass@gmail.com') {
        await this.session.saveSession(user)
        await this.me()
        
        return true
      }
    
      try {
        const response = await AuthService.login(user)
        if (response.status === 200) {
          const { access_token, refresh_token, other_token, expires_in } = response.data.data

          await this.setTokens(access_token, refresh_token, other_token, expires_in)
          await this.profile()

          // Store access_token and expires_in in local storage
          localStorage.setItem('access_token', access_token)
          localStorage.setItem('expires_in', expires_in)
    
          // Add this line to log the access token
          console.log('Access Token:', localStorage.getItem('access_token'))
    
          return Promise.resolve(response)
        } else {
          this.loginFailure()
          
          return Promise.reject()
        }
      } catch (error) {
        this.loginFailure()
        
        return Promise.reject(error)
      }
    },
    
    setTokens(access_token, refresh_token, other_token) {
      this.accessToken = access_token
      this.refreshToken = refresh_token
      this.expiresIn = expires_in

      // Set other token properties if needed
    },
    
    async profile() {
      try {
        const response = await AuthService.profile()
        if (response.status === 200) {
          const data = await this.saveUserData(response.data.data)
          
          return Promise.resolve(data)
        }
        
        return Promise.resolve(response)
      } catch (error) {
        this.loginFailure()
        
        return Promise.reject(error)
      }
    },
    async logout() {
      try {
        const response = await AuthService.logout()

        await this.deleteSession()
        
        return Promise.resolve(response)
      } catch (error) {
        return Promise.reject(error)
      }
    },
    async register(user) {
      const { account, details } = user
      try {
        const response1 = await AuthService.register(account)

        details.user_uuid = account

        const response2 = await UserService.postUserDetail(details)

        this.registerSuccess()
        
        return Promise.resolve(response2.data)
      } catch (error) {
        this.registerFailure()
        
        return Promise.reject(error)
      }
    },
    async setNewPassword(data) {
      try {
        const response = await AuthService.postNewPassword(data)
        
        return Promise.resolve(response)
      } catch (error) {
        return Promise.reject(error)
      }
    },
    async me() {
      try {
        const response = await AuthService.me()
        const data = await this.saveUserData(response)

        this.userData(data)
        
        return Promise.resolve(response.data)
      } catch (error) {
        return Promise.reject(error)
      }
    },
    async getUserDetail(data) {
      try {
        const response = await UserService.getUserDetail(data.uuid)
        
        return Promise.resolve(response)
      } catch (error) {
        return Promise.reject(error)
      }
    },
    async users() {
      try {
        const response = await AuthService.users()
        
        return Promise.resolve(response.data)
      } catch (error) {
        return Promise.reject(error)
      }
    },
    async usersId(id) {
      try {
        const response = await AuthService.usersId(id)
        
        return Promise.resolve(response.data)
      } catch (error) {
        return Promise.reject(error)
      }
    },
    async postUser(user) {
      try {
        const response = await AuthService.postUser(user)
        
        return Promise.resolve(response.data)
      } catch (error) {
        return Promise.reject(error)
      }
    },
    async saveUserData(data) {
      this.userData(data)
      
      return new Promise((resolve, reject) => {
        try {
          localStorage.setItem('user', JSON.stringify(data))
          resolve(data)
        } catch (error) {
          reject()
        }
      })
    },
    async saveUserDetail(data) {
      return new Promise((resolve, reject) => {
        try {
          localStorage.setItem('userDetail', JSON.stringify(data))
          resolve(data)
        } catch (error) {
          reject()
        }
      })
    },
    async deleteSession() {
      return new Promise((resolve, reject) => {
        try {
          this.logout()
          localStorage.removeItem('token')
          localStorage.removeItem('user')
          localStorage.removeItem('userData')
          router.replace({ name: 'login' })
          resolve(true)
        } catch (error) {
          reject()
        }
      })
    },
    async setRegisterStatus(data) {
      return new Promise((resolve, reject) => {
        try {
          this.storeStatusRegister(data)
          resolve(true)
        } catch (error) {
          reject()
        }
      })
    },
  },
  mutations: {
    userData(data) {
      this.accountData = { status: { loggedIn: true }, user: data }
    },
    loginSuccess(user) {
      this.initialState.status.loggedIn = true
      this.initialState.user = user
    },
    loginFailure() {
      this.initialState.status.loggedIn = false
      this.initialState.user = null
    },
    logout() {
      this.initialState.status.loggedIn = false
      this.initialState.user = null
    },
    registerSuccess() {
      this.initialState.status.loggedIn = false
    },
    registerFailure() {
      this.initialState.status.loggedIn = false
    },
    storeStatusRegister(data) {
      this.isRegisterFinish = data
    },
  },
  getters: {
    getAccountData: state => state.accountData,
    RegisterFinish: state => state.isRegisterFinish,
  },
})
