 

const AsyncAwait = () => {
    const promsise = () => {
        return new Promise((resolve, reject) => {
            let n = Math.floor(Math.random() * 100)
            if (n > 50) {
                console.log(`${n} is greater then 50`)
                resolve(n)
            }
            else {
                console.log(`${n} is less than or equal to 50`)
                reject(n)
            }
        })

    }
    promsise().then(() => {
        console.log(`This is shows because success function is calling`)
    }).catch(() => {
        console.log(`This is showing because failur function is calling`)
    })


    const MyCallingFun = async () => {
        try {
           await promsise()
            console.log(`This is shows because success function is calling`)
        } catch (error) {
            console.log(`This is showing because failur function is calling`)
        }
    }
MyCallingFun()




    return (<>
        <h1>This is practics of async await </h1>
    </>);
}

export default AsyncAwait;