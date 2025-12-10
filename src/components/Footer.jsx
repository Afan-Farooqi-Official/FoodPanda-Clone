
const Footer = () => {
    return (
        <div>
            <div class='grid grid-cols-4 px-14 py-7 border-y border-gray-100'>
                <div>© foodpanda</div>
                <div class='flex flex-col gap-4'>
                    <a href="#">Press</a>
                    <a href="#">pandapay Terms and Conditions</a>
                    <a href="#">Security</a>
                    <a href="#">Careers</a>
                    <a href="#">Cashback Terms and Conditions</a>
                    <a href="#">Partner with Us</a>
                    <a href="#">All cities</a>
                    <a href="#">pandapro - Monthly Subscription Programme</a>
                    <a href="#">Ramzan deals</a>
                    <a href="#">Areas delivered in Lahore</a>
                </div>
                <div class='flex flex-col gap-4'>
                    <a href="#">Help Center</a>
                    <a href="#">Terms and Conditions</a>
                    <a href="#">Download foodpanda Apps</a>
                    <a href="#">Suggest a Restaurant</a>
                    <a href="#">All cuisines</a>
                    <a href="#">pandago - Request a Rider</a>
                    <a href="#">Update on COVID-19 in Pakistan</a>
                    <a href="#">foodpanda Home Chef</a>
                    <a href="#">Areas delivered in Karachi</a>
                    <a href="#">Areas delivered in Islamabad</a>
                </div>
                <div class='flex flex-col gap-4'>
                    <a href="#">Refunds with pandapay</a>
                    <a href="#">Privacy policy</a>
                    <a href="#">Human rights policy</a>
                    <a href="#">Corporate Customer</a>
                    <a href="#">foodpanda Magazine</a>
                    <a href="#">foodpanda Vouchers & Coupons</a>
                    <a href="#">pandamart Grocery Delivery</a>
                    <a href="#">Become an Affiliate</a>
                    <a href="#">Areas delivered in Gujranwala</a>
                    <a href="#">Areas delivered in Peshawar</a>
                </div>
            </div>
            <div class='flex py-7 items-center justify-between'>
                <div class='flex'>
                    <nav class='flex items-center ml-18 gap-2 hover:cursor-pointer mr-5'>
                        <img class='w-7 h-7' src="../public/download.svg" alt="logo-pic" />
                        <img class='h-6' src="../public/download (1).svg" alt="logo-txt" />
                    </nav>
                    |
                    <img class='ml-5' src="../public/delivery-hero.svg" alt="" />
                </div>
                <div class='flex gap-4 mr-14'>
                    <img class='border border-gray-200 p-2 rounded-full cursor-pointer transition-transform duration-300 ease-out hover:bg-gray-100 hover:scale-110' src="../public/fb.svg" alt="contact" />
                    <img class='border border-gray-200 p-2 rounded-full cursor-pointer transition-transform duration-300 ease-out hover:bg-gray-100 hover:scale-110' src="../public/insta.svg" alt="contact" />
                </div>
            </div>
        </div>
    )
}

export default Footer;