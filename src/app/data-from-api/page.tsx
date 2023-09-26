import React from 'react'


const getData = async () => {
    const res = await fetch('http://localhost:3000/api/user-drizzle');
    let data = await res.json()
    return data;
}

export default async function page() {
    const data = await getData();
    return (
        <div className='p-12'>
            {
                data.map((column: any, index: number) => {
                    return (
                        <div className='grid grid-cols-2 p-4 border'>
                            <div>
                                <h1>{column.user_id}</h1>
                            </div>
                            <div>
                                <h1>{column.user_name}</h1>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
