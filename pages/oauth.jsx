import Router from 'next/router'
import { Component } from 'react'
import axios from 'axios'
import localStore from 'utils/localStore'

export default class Oauth extends Component {
    constructor (props) {
        super(props)
    }
    async componentDidMount () {
        try {
            const { data } = await axios.get('http://passport.dahengzhang.show/login', {
                params: {
                    code: Router.query.code
                }
            })
            localStore.setItem('token', data.token)
            delete data.token
            localStore.setItem('user', data)
            window.open(Router.query.s_url || '/', '_self')
        } catch (error) {
            console.log('登录失败')
        }
    }
    render () {
        return (
            <div>waiting</div>
        )
    }
}
