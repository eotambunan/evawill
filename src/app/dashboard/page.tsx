'use client'

import BankCard from "@/components/BankCard"



const Dashboard = () => {
    return (
        <>
            <div className="w-12 h-12 bg-green-400 fixed bottom-4 right-4 flex items-center justify-center">
                khintil
            </div>

            <div className="h-screen">
                <p>ini adalah halaman dashboard</p>
            </div>
            <div className="h-screen">
                <p>ini adalah halaman dashboard</p>
            </div>
            <div className="h-screen">
                <p>ini adalah halaman dashboard</p>
            </div>

            <div>
                <BankCard
                    accountHolder="Evander Oktapian"
                    bankLogo="/bca.png"
                    bankName="BCA"
                    accountNumber="23123123"
                />
            </div>


        </>
    )
}

export default Dashboard