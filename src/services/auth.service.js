import axios from '@axios'

class AuthService {
  async me() {
    const response = await axios.get('api/auth/me')
    
    return response.data
  }

  users() {
    return axios.get('api/auth/users')
  }

  usersByCompany(params) {
    return axios.get(`api/auth/users?company=${params.company}`)
  }

  usersId(id) {
    return axios.get(`api/auth/users/${id}`)
  }

  changePassword(data) {
    return axios.patch('v1/change-password', data)
  }

  profile() {
    return axios.get('v1/auth/me')
  }

  login(user) {
    console.log('login function called')
    
    const requestData = {
      username: user.email,
      password: user.password,
    }
  
    return axios.post('v1/auth', requestData)
      .then(response => {
        const { access_token, expires_in } = response.data.data
        if (access_token) {
          this.saveToken(access_token)
          console.log('Access Token:', access_token)
          console.log('Expires In:', expires_in)
        }
        
        return response
      })
      .catch(error => {
        console.log('Login error', error)
        throw error
      })
  }
  
  async saveToken(access_token, expires_in) {
    const expirationTime = Date.now() + parseInt(expires_in, 10) * 1000 // Parse the expires_in value as an integer

    this.accessToken = access_token
    this.expirationTime = expirationTime
    localStorage.setItem('token', access_token)
    localStorage.setItem('expirationTime', expirationTime.toString())
  }

  logout() {
    return axios.get('api/logout').then(response => {
      console.log('API', response)

      // if (response.status === 200) {
      //   localStorage.removeItem('user')
      //   localStorage.removeItem('userData')
      // }
      return response

    }).catch(error => {
      console.log('Service error', error)
      
      throw error
    })
  }

  register(user) {
    throw axios.post(
      'api/auth/signup',
      user,
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods':
            'GET, POST, PATCH, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
        },
      },
    )
  }

  postUser(user) {
    return axios.post(
      'api/auth/member',
      {
        name: user.name,
        email: user.email,
        password: user.password,
        password_confirmation: user.passwordConfirm,
        role: user.role,
        id_dist: user.id_dist,
        prime_id: user.prime_id,
        status: user.status,
        no_ktp: user.no_ktp,
        dob: user.dob,
        sex: user.sex,
        photo: user.photo,
        photo_ktp: user.photo_ktp,
        latitude: user.latitude,
        longitude: user.longitude,
        zip: user.zip,
        country_id: user.country_id,
        province_id: user.province_id,
        city_id: user.city_id,
        district_id: user.district_id,
        village_id: user.village_id,
        address: user.address,
        phone: user.phone,
        whatsapp: user.whatsapp,
        bank_code: user.bank_code,
        bank_acc_number: user.bank_acc_number,
        bank_acc_name: user.bank_acc_name,
        fb: user.fb,
        ig: user.ig,
        shopee: user.shopee,
        tokped: user.tokped,
        lazada: user.lazada,
        bukalapak: user.bukalapak,
        blibli: user.blibli,
      },
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods':
            'GET, POST, PATCH, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
        },
      },
    )
  }
}

export default new AuthService()
