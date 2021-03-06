import { Request, Response } from 'express';
const fetch = require('node-fetch');

class CollectController {
    async store(request: Request, response: Response) {
        const { user, recycling, collect } = request.body

        const resUser = await fetch('http://ec2-3-15-159-133.us-east-2.compute.amazonaws.com:8081/users', {
            method: 'post',
            body: JSON.stringify(user),
            headers: { 'Content-Type': 'application/json' }
        })

        const resRecycling = await fetch('http://ec2-3-15-159-133.us-east-2.compute.amazonaws.com:8082/recycled-products', {
            method: 'post',
            body: JSON.stringify(recycling),
            headers: { 'Content-Type': 'application/json' }
        })

        const resCollect = await fetch('http://ec2-3-15-159-133.us-east-2.compute.amazonaws.com:8083/collects', {
            method: 'post',
            body: JSON.stringify(collect),
            headers: { 'Content-Type': 'application/json' }
        })
        return response.status(201).json({
            user: await resUser.json(),
            recycling: await resRecycling.json(),
            collect: await resCollect.json()
        })
    }

    async storeAll(request: Request, response: Response) {
        const { user, recycling, collect } = request.body

        //aws
        const resUser = await fetch('http://ec2-3-15-159-133.us-east-2.compute.amazonaws.com:8081/users', {
            method: 'post',
            body: JSON.stringify(user),
            headers: { 'Content-Type': 'application/json' }
        })

        //google
        const resRecycling = await fetch('http://34.66.26.218:3333/recycled-products', {
            method: 'post',
            body: JSON.stringify(recycling),
            headers: { 'Content-Type': 'application/json' }
        })

        //google
        const resCollectGoogle = await fetch('http://34.66.26.218:3334/collects', {
            method: 'post',
            body: JSON.stringify(collect),
            headers: { 'Content-Type': 'application/json' }
        })

        //azure
        const resCollect = await fetch('http://40.84.227.136:3333/collects', {
            method: 'post',
            body: JSON.stringify(collect),
            headers: { 'Content-Type': 'application/json' }
        })
        return response.status(201).json({
            user: await resUser.json(),
            recycling: await resRecycling.json(),
            collectGoogle: await resCollectGoogle.json(),
            collect: await resCollect.json()
        })
    }

    async index(request: Request, response: Response) {
        let list = []
        const { qtde } : any = request.query
        await fetch('http://ec2-3-15-159-133.us-east-2.compute.amazonaws.com:8081/login', {
            method: 'post',
            body: JSON.stringify({ email: 'teste@email.com', password: '123456' }),
            headers: { 'Content-Type': 'application/json' }
        })
        for (let i = 0; i < qtde; i++) {
            let resCollect = await fetch('http://ec2-3-15-159-133.us-east-2.compute.amazonaws.com:8083/collects', {
                method: 'get',
                headers: { 'Content-Type': 'application/json' }
            })
            let data = await resCollect.json()
            for (let item of data) {
                list.push(item)
            }
            resCollect = await fetch('http://ec2-3-15-159-133.us-east-2.compute.amazonaws.com:8083/collects', {
                method: 'get',
                headers: { 'Content-Type': 'application/json' }
            })
            data = await resCollect.json()
            for (let item of data) {
                list.push(item)
            }
            resCollect = await fetch('http://ec2-3-15-159-133.us-east-2.compute.amazonaws.com:8083/collects', {
                method: 'get',
                headers: { 'Content-Type': 'application/json' }
            })
            data = await resCollect.json()
            for (let item of data) {
                list.push(item)
            }
        }
        return response.json(list)
    }

    async indexAll(request: Request, response: Response) {
        let list = []
        const { qtde } : any = request.query
        for (let i = 0; i < qtde; i++) {
            let resCollect = await fetch('http://34.66.26.218:3334/collects', {
                method: 'get',
                headers: { 'Content-Type': 'application/json' }
            })
            let data = await resCollect.json()
            for (let item of data) {
                list.push(item)
            }

            resCollect = await fetch('http://40.84.227.136:3333/collects', {
                method: 'get',
                headers: { 'Content-Type': 'application/json' }
            })
            data = await resCollect.json()
            for (let item of data) {
                list.push(item)
            }

            resCollect = await fetch('http://ec2-3-15-159-133.us-east-2.compute.amazonaws.com:8083/collects', {
                method: 'get',
                headers: { 'Content-Type': 'application/json' }
            })
            data = await resCollect.json()
            for (let item of data) {
                list.push(item)
            }
        }

        return response.json(list)
    }

    async indexAzure(request: Request, response: Response) {
        let list = []
        const { qtde } : any = request.query
        for (let i = 0; i < qtde; i++) {
            const resCollect = await fetch('http://40.84.227.136:3333/collects', {
                method: 'get',
                headers: { 'Content-Type': 'application/json' }
            })
            let data = await resCollect.json()
            for (let item of data) {
                list.push(item)
            }
        }
        return response.json(list)
    }
}

export default CollectController;