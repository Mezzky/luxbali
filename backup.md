<!-- Header Real -->
    <header class="fixed top-0 w-full bg-secondary z-50 p-4 tablet:p-5 laptop:px-20">
        <nav class="flex justify-between items-center">
            <!-- Logo -->
            <a href="index.html" class="flex items-center">
                <img src="img/logo-luxbali.png" alt="LuxBali Logo" class="h-12" />
            </a>

            <!-- Desktop Navigation -->
            <ul class="hidden laptop:flex gap-8 items-center">
                <li><a href="accommodation.html" class="nav-link">Accommodation</a></li>
                <li><a href="destination.html" class="nav-link">Destination</a></li>

                <button id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover"
                    class="nav-link inline-flex items-center" type="button">Products <svg class="w-2.5 h-2.5 ms-3"
                        aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m1 1 4 4 4-4" /></svg>
                </button>

                <!-- Dropdown menu -->
                <div id="dropdownHover" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
                    <ul class="py-2 text-sm text-dark" aria-labelledby="dropdownHoverButton">
                        <li>
                            <a href="transport.html" class="block px-4 py-2 hover:bg-gray-100">Transport</a>
                        </li>
                        <li>
                            <a href="bali-atraction.html" class="block px-4 py-2 hover:bg-gray-100">Bali Attraction</a>
                        </li>
                        <li>
                            <a href="promotion.html" class="block px-4 py-2 hover:bg-gray-100">Promotion</a>
                        </li>
                        <li>
                            <a href="visa.html" class="block px-4 py-2 hover:bg-gray-100">Visa</a>
                        </li>
                    </ul>
                </div>

                <li><a href="about.html" class="nav-link">About Us</a></li>
                <li><a href="contact.html" class="nav-link">Contact Us</a></li>
            </ul>

            <div class="nav-button hidden laptop:flex items-center gap-4">
                <!-- Currency Dropdown -->
                <div class="relative">
                    <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar"
                        class="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-dark rounded-lg cursor-pointer hover:bg-gray-100">
                        USD <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m1 1 4 4 4-4" /></svg>
                    </button>
                    <!-- Dropdown menu -->
                    <div id="dropdownNavbar"
                        class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
                        <ul class="py-2 text-sm text-dark" aria-labelledby="dropdownLargeButton">
                            <li>
                                <a href="#" class="block px-4 py-2 hover:bg-gray-100">IDR</a>
                            </li>
                            <li>
                                <a href="#" class="block px-4 py-2 hover:bg-gray-100">SGD</a>
                            </li>
                            <li>
                                <a href="#" class="block px-4 py-2 hover:bg-gray-100">YEN</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- Language Dropdown -->
                <div class="relative">
                    <button type="button" data-dropdown-toggle="language-dropdown-menu"
                        class="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-dark rounded-lg cursor-pointer hover:bg-gray-100">
                        <svg class="w-5 h-5 rounded-full me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3900 3900">
                            <path fill="#b22234" d="M0 0h7410v3900H0z" />
                            <path d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0" stroke="#fff"
                                stroke-width="300" />
                            <path fill="#3c3b6e" d="M0 0h2964v2100H0z" />
                            <g fill="#fff">
                                <g id="d">
                                    <g id="c">
                                        <g id="e">
                                            <g id="b">
                                                <path id="a"
                                                    d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z" />
                                                <use xlink:href="#a" y="420" />
                                                <use xlink:href="#a" y="840" />
                                                <use xlink:href="#a" y="1260" />
                                            </g>
                                            <use xlink:href="#a" y="1680" />
                                        </g>
                                        <use xlink:href="#b" x="247" y="210" />
                                    </g>
                                    <use xlink:href="#c" x="494" />
                                </g>
                                <use xlink:href="#d" x="988" />
                                <use xlink:href="#c" x="1976" />
                                <use xlink:href="#e" x="2470" />
                            </g>
                        </svg>
                        English
                    </button>
                    <!-- Dropdown -->
                    <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow"
                        id="language-dropdown-menu">
                        <ul class="py-2 font-medium" role="none">
                            <li>
                                <a href="#" class="block px-4 py-2 text-sm text-dark hover:bg-gray-100" role="menuitem">
                                    <div class="inline-flex items-center">
                                        <svg aria-hidden="true" class="h-3.5 w-3.5 rounded-full me-2"
                                            xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-us"
                                            viewBox="0 0 512 512">
                                            <g fill-rule="evenodd">
                                                <g stroke-width="1pt">
                                                    <path fill="#bd3d44"
                                                        d="M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                                                        transform="scale(3.9385)" />
                                                    <path fill="#fff"
                                                        d="M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                                                        transform="scale(3.9385)" />
                                                </g>
                                                <path fill="#192f5d" d="M0 0h98.8v70H0z" transform="scale(3.9385)" />
                                                <path fill="#fff"
                                                    d="M8.2 3l1 2.8H12L9.7 7.5l.9 2.7-2.4-1.7L6 10.2l.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7L74 8.5l-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 7.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 24.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 21.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 38.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 35.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 52.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 49.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 66.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 63.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9z"
                                                    transform="scale(3.9385)" />
                                            </g>
                                        </svg>
                                        English
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="block px-4 py-2 text-sm text-dark hover:bg-gray-100" role="menuitem">
                                    <div class="inline-flex items-center">
                                        <svg class="h-3.5 w-3.5 rounded-full me-2" aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-de"
                                            viewBox="0 0 512 512">
                                            <path fill="#ffce00" d="M0 341.3h512V512H0z" />
                                            <path d="M0 0h512v170.7H0z" />
                                            <path fill="#d00" d="M0 170.7h512v170.6H0z" /></svg>
                                        Deutsch
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="block px-4 py-2 text-sm text-dark hover:bg-gray-100" role="menuitem">
                                    <div class="inline-flex items-center">
                                        <svg class="h-3.5 w-3.5 rounded-full me-2" aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-it"
                                            viewBox="0 0 512 512">
                                            <g fill-rule="evenodd" stroke-width="1pt">
                                                <path fill="#fff" d="M0 0h512v512H0z" />
                                                <path fill="#009246" d="M0 0h170.7v512H0z" />
                                                <path fill="#ce2b37" d="M341.3 0H512v512H341.3z" />
                                            </g>
                                        </svg>
                                        Italiano
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="block px-4 py-2 text-sm text-dark hover:bg-gray-100" role="menuitem">
                                    <div class="inline-flex items-center">
                                        <svg class="h-3.5 w-3.5 rounded-full me-2" aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlns:xlink="http://www.w3.org/1999/xlink" id="flag-icon-css-cn"
                                            viewBox="0 0 512 512">
                                            <defs>
                                                <path id="a" fill="#ffde00" d="M1-.3L-.7.8 0-1 .6.8-1-.3z" />
                                            </defs>
                                            <path fill="#de2910" d="M0 0h512v512H0z" />
                                            <use width="30" height="20" transform="matrix(76.8 0 0 76.8 128 128)"
                                                xlink:href="#a" />
                                            <use width="30" height="20"
                                                transform="rotate(-121 142.6 -47) scale(25.5827)" xlink:href="#a" />
                                            <use width="30" height="20" transform="rotate(-98.1 198 -82) scale(25.6)"
                                                xlink:href="#a" />
                                            <use width="30" height="20"
                                                transform="rotate(-74 272.4 -114) scale(25.6137)" xlink:href="#a" />
                                            <use width="30" height="20"
                                                transform="matrix(16 -19.968 19.968 16 256 230.4)" xlink:href="#a" />
                                        </svg>
                                        中文 (繁體)
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- Sign-In Button -->
                <a href="./login/login.html" class="btn-primary">Sign in</a>
                <!-- Profile Dropdown -->
                <div class="relative">
                    <button id="dropDownProfileLink" data-dropdown-toggle="dropDownProfile"
                        class="inline-flex items-center font-bold justify-center px-4 py-2 text-sm text-dark rounded-lg cursor-pointer bg-gray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="currentColor"
                                d="M12 12q-1.65 0-2.825-1.175T8 8t1.175-2.825T12 4t2.825 1.175T16 8t-1.175 2.825T12 12m-8 8v-2.8q0-.85.438-1.562T5.6 14.55q1.55-.775 3.15-1.162T12 13t3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2V20z" />
                            </svg>
                        Username <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m1 1 4 4 4-4" /></svg>
                    </button>
                    <!-- Profile menu -->
                    <div id="dropDownProfile"
                        class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
                        <ul class="py-2 text-sm text-dark" aria-labelledby="dropdownLargeButton">
                            <li>
                                <a href="booking-history.html"
                                    class="flex items-center gap-2 px-4 py-2 hover:bg-gray-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path fill="currentColor"
                                            d="M12 21q-3.15 0-5.575-1.912T3.275 14.2q-.1-.375.15-.687t.675-.363q.4-.05.725.15t.45.6q.6 2.25 2.475 3.675T12 19q2.925 0 4.963-2.037T19 12t-2.037-4.962T12 5q-1.725 0-3.225.8T6.25 8H8q.425 0 .713.288T9 9t-.288.713T8 10H4q-.425 0-.712-.288T3 9V5q0-.425.288-.712T4 4t.713.288T5 5v1.35q1.275-1.6 3.113-2.475T12 3q1.875 0 3.513.713t2.85 1.924t1.925 2.85T21 12t-.712 3.513t-1.925 2.85t-2.85 1.925T12 21m1-9.4l2.5 2.5q.275.275.275.7t-.275.7t-.7.275t-.7-.275l-2.8-2.8q-.15-.15-.225-.337T11 11.975V8q0-.425.288-.712T12 7t.713.288T13 8z" />
                                        </svg>
                                    Booking History
                                </a>
                            </li>
                            <li>
                                <a href="cart-page.html" class="flex items-center gap-2 px-4 py-2 hover:bg-gray-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path fill="currentColor"
                                            d="M7 22q-.825 0-1.412-.587T5 20t.588-1.412T7 18t1.413.588T9 20t-.587 1.413T7 22m10 0q-.825 0-1.412-.587T15 20t.588-1.412T17 18t1.413.588T19 20t-.587 1.413T17 22M5.2 4h14.75q.575 0 .875.513t.025 1.037l-3.55 6.4q-.275.5-.737.775T15.55 13H8.1L7 15h12v2H7q-1.125 0-1.7-.987t-.05-1.963L6.6 11.6L3 4H1V2h3.25z" />
                                        </svg>
                                    Your Cart
                                </a>
                            </li>
                            <li>
                                <a href="#" class="flex items-center gap-2 px-4 py-2 text-danger hover:bg-gray-100">
                                    <svg class="rotate-180" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                        viewBox="0 0 24 24">
                                        <path fill="currentColor"
                                            d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h6q.425 0 .713.288T12 4t-.288.713T11 5H5v14h6q.425 0 .713.288T12 20t-.288.713T11 21zm12.175-8H10q-.425 0-.712-.288T9 12t.288-.712T10 11h7.175L15.3 9.125q-.275-.275-.275-.675t.275-.7t.7-.313t.725.288L20.3 11.3q.3.3.3.7t-.3.7l-3.575 3.575q-.3.3-.712.288t-.713-.313q-.275-.3-.262-.712t.287-.688z" />
                                        </svg>
                                    Logout
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- Mobile Menu Toggle -->
            <button id="menu-toggle" class="flex flex-col items-end gap-2 h-8 w-8 laptop:hidden">
                <span class="block bg-main h-1 w-9 rounded transition-transform duration-300"></span>
                <span class="block bg-main h-1 w-6 rounded transition-transform duration-300"></span>
                <span class="block bg-main h-1 w-4 rounded transition-transform duration-300"></span>
            </button>
        </nav>

        <!-- Mobile Navigation -->
        <ul id="mobile-menu"
            class="laptop:hidden -translate-x-full transition-transform duration-300 ease-in-out fixed p-5 bg-secondary w-full h-full left-0 flex flex-col gap-4">
            <li><a href="accommodation.html" class="mobile-nav-link">Accommodation</a></li>
            <li><a href="destination.html" class="mobile-nav-link">Destination</a></li>
            <li><a href="bali-atraction.html" class="mobile-nav-link">Bali Attraction</a></li>
            <li><a href="transport.html" class="mobile-nav-link">Transport</a></li>
            <li><a href="promotion.html" class="mobile-nav-link">Promotion</a></li>
            <li><a href="about.html" class="mobile-nav-link">About Us</a></li>
            <li><a href="contact.html" class="mobile-nav-link">Contact Us</a></li>
            <a href="./login/login.html" class="mobile-btn-primary">Sign in</a>
            <!-- Profile Dropdown -->
            <div class="relative w-full">
                <button id="dropDownProfileLink" data-dropdown-toggle="dropDownProfileMobile"
                    class="inline-flex w-full items-center font-bold justify-center px-4 py-2 text-sm text-dark rounded-lg cursor-pointer bg-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="currentColor"
                            d="M12 12q-1.65 0-2.825-1.175T8 8t1.175-2.825T12 4t2.825 1.175T16 8t-1.175 2.825T12 12m-8 8v-2.8q0-.85.438-1.562T5.6 14.55q1.55-.775 3.15-1.162T12 13t3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2V20z" />
                        </svg>
                    Username <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m1 1 4 4 4-4" /></svg>
                </button>
                <!-- Profile menu -->
                <div id="dropDownProfileMobile"
                    class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
                    <ul class="py-2 text-sm text-dark" aria-labelledby="dropdownLargeButton">
                        <li>
                            <a href="booking-history.html" class="flex items-center gap-2 px-4 py-2 hover:bg-gray-100">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path fill="currentColor"
                                        d="M12 21q-3.15 0-5.575-1.912T3.275 14.2q-.1-.375.15-.687t.675-.363q.4-.05.725.15t.45.6q.6 2.25 2.475 3.675T12 19q2.925 0 4.963-2.037T19 12t-2.037-4.962T12 5q-1.725 0-3.225.8T6.25 8H8q.425 0 .713.288T9 9t-.288.713T8 10H4q-.425 0-.712-.288T3 9V5q0-.425.288-.712T4 4t.713.288T5 5v1.35q1.275-1.6 3.113-2.475T12 3q1.875 0 3.513.713t2.85 1.924t1.925 2.85T21 12t-.712 3.513t-1.925 2.85t-2.85 1.925T12 21m1-9.4l2.5 2.5q.275.275.275.7t-.275.7t-.7.275t-.7-.275l-2.8-2.8q-.15-.15-.225-.337T11 11.975V8q0-.425.288-.712T12 7t.713.288T13 8z" />
                                    </svg>
                                Booking History
                            </a>
                        </li>
                        <li>
                            <a href="cart-page.html" class="flex items-center gap-2 px-4 py-2 hover:bg-gray-100">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path fill="currentColor"
                                        d="M7 22q-.825 0-1.412-.587T5 20t.588-1.412T7 18t1.413.588T9 20t-.587 1.413T7 22m10 0q-.825 0-1.412-.587T15 20t.588-1.412T17 18t1.413.588T19 20t-.587 1.413T17 22M5.2 4h14.75q.575 0 .875.513t.025 1.037l-3.55 6.4q-.275.5-.737.775T15.55 13H8.1L7 15h12v2H7q-1.125 0-1.7-.987t-.05-1.963L6.6 11.6L3 4H1V2h3.25z" />
                                    </svg>
                                Your Cart
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center gap-2 px-4 py-2 text-danger hover:bg-gray-100">
                                <svg class="rotate-180" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                    viewBox="0 0 24 24">
                                    <path fill="currentColor"
                                        d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h6q.425 0 .713.288T12 4t-.288.713T11 5H5v14h6q.425 0 .713.288T12 20t-.288.713T11 21zm12.175-8H10q-.425 0-.712-.288T9 12t.288-.712T10 11h7.175L15.3 9.125q-.275-.275-.275-.675t.275-.7t.7-.313t.725.288L20.3 11.3q.3.3.3.7t-.3.7l-3.575 3.575q-.3.3-.712.288t-.713-.313q-.275-.3-.262-.712t.287-.688z" />
                                    </svg>
                                Logout
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="nav-btn flex laptop:hidden items-center justify-between gap-4">
                <!-- Currency Dropdown -->
                <div class="relative">
                    <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbarMobile"
                        class="flex items-center justify-between w-full py-2 px-3 text-dark rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-main md:p-0 md:w-auto">
                        USD <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m1 1 4 4 4-4" /></svg>
                    </button>
                    <!-- Dropdown menu -->
                    <div id="dropdownNavbarMobile"
                        class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
                        <ul class="py-2 text-sm text-dark" aria-labelledby="dropdownLargeButton">
                            <li>
                                <a href="#" class="block px-4 py-2 hover:bg-gray-100">IDR</a>
                            </li>
                            <li>
                                <a href="#" class="block px-4 py-2 hover:bg-gray-100">SGD</a>
                            </li>
                            <li>
                                <a href="#" class="block px-4 py-2 hover:bg-gray-100">YEN</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- Language Dropdown -->
                <div class="relative">
                    <button type="button" data-dropdown-toggle="language-dropdown-menu-mobile"
                        class="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-dark rounded-lg cursor-pointer hover:bg-gray-100">
                        <svg class="w-5 h-5 rounded-full me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3900 3900">
                            <path fill="#b22234" d="M0 0h7410v3900H0z" />
                            <path d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0" stroke="#fff"
                                stroke-width="300" />
                            <path fill="#3c3b6e" d="M0 0h2964v2100H0z" />
                            <g fill="#fff">
                                <g id="d">
                                    <g id="c">
                                        <g id="e">
                                            <g id="b">
                                                <path id="a"
                                                    d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z" />
                                                <use xlink:href="#a" y="420" />
                                                <use xlink:href="#a" y="840" />
                                                <use xlink:href="#a" y="1260" />
                                            </g>
                                            <use xlink:href="#a" y="1680" />
                                        </g>
                                        <use xlink:href="#b" x="247" y="210" />
                                    </g>
                                    <use xlink:href="#c" x="494" />
                                </g>
                                <use xlink:href="#d" x="988" />
                                <use xlink:href="#c" x="1976" />
                                <use xlink:href="#e" x="2470" />
                            </g>
                        </svg>
                        English
                    </button>
                    <!-- Dropdown -->
                    <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow"
                        id="language-dropdown-menu-mobile">
                        <ul class="py-2 font-medium" role="none">
                            <li>
                                <a href="#" class="block px-4 py-2 text-sm text-dark hover:bg-gray-100" role="menuitem">
                                    <div class="inline-flex items-center">
                                        <svg aria-hidden="true" class="h-3.5 w-3.5 rounded-full me-2"
                                            xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-us"
                                            viewBox="0 0 512 512">
                                            <g fill-rule="evenodd">
                                                <g stroke-width="1pt">
                                                    <path fill="#bd3d44"
                                                        d="M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                                                        transform="scale(3.9385)" />
                                                    <path fill="#fff"
                                                        d="M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                                                        transform="scale(3.9385)" />
                                                </g>
                                                <path fill="#192f5d" d="M0 0h98.8v70H0z" transform="scale(3.9385)" />
                                                <path fill="#fff"
                                                    d="M8.2 3l1 2.8H12L9.7 7.5l.9 2.7-2.4-1.7L6 10.2l.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7L74 8.5l-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 7.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 24.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 21.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 38.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 35.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 52.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 49.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 66.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 63.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9z"
                                                    transform="scale(3.9385)" />
                                            </g>
                                        </svg>
                                        English
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="block px-4 py-2 text-sm text-dark hover:bg-gray-100" role="menuitem">
                                    <div class="inline-flex items-center">
                                        <svg class="h-3.5 w-3.5 rounded-full me-2" aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-de"
                                            viewBox="0 0 512 512">
                                            <path fill="#ffce00" d="M0 341.3h512V512H0z" />
                                            <path d="M0 0h512v170.7H0z" />
                                            <path fill="#d00" d="M0 170.7h512v170.6H0z" /></svg>
                                        Deutsch
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="block px-4 py-2 text-sm text-dark hover:bg-gray-100" role="menuitem">
                                    <div class="inline-flex items-center">
                                        <svg class="h-3.5 w-3.5 rounded-full me-2" aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-it"
                                            viewBox="0 0 512 512">
                                            <g fill-rule="evenodd" stroke-width="1pt">
                                                <path fill="#fff" d="M0 0h512v512H0z" />
                                                <path fill="#009246" d="M0 0h170.7v512H0z" />
                                                <path fill="#ce2b37" d="M341.3 0H512v512H341.3z" />
                                            </g>
                                        </svg>
                                        Italiano
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="block px-4 py-2 text-sm text-dark hover:bg-gray-100" role="menuitem">
                                    <div class="inline-flex items-center">
                                        <svg class="h-3.5 w-3.5 rounded-full me-2" aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlns:xlink="http://www.w3.org/1999/xlink" id="flag-icon-css-cn"
                                            viewBox="0 0 512 512">
                                            <defs>
                                                <path id="a" fill="#ffde00" d="M1-.3L-.7.8 0-1 .6.8-1-.3z" />
                                            </defs>
                                            <path fill="#de2910" d="M0 0h512v512H0z" />
                                            <use width="30" height="20" transform="matrix(76.8 0 0 76.8 128 128)"
                                                xlink:href="#a" />
                                            <use width="30" height="20"
                                                transform="rotate(-121 142.6 -47) scale(25.5827)" xlink:href="#a" />
                                            <use width="30" height="20" transform="rotate(-98.1 198 -82) scale(25.6)"
                                                xlink:href="#a" />
                                            <use width="30" height="20"
                                                transform="rotate(-74 272.4 -114) scale(25.6137)" xlink:href="#a" />
                                            <use width="30" height="20"
                                                transform="matrix(16 -19.968 19.968 16 256 230.4)" xlink:href="#a" />
                                        </svg>
                                        中文 (繁體)
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </ul>
    </header>


    <!-- Destination Real -->
    <div class="grid grid-cols-1 tablet:grid-cols-2">
            <a class="destination-card group relative overflow-hidden cursor-pointer" href="destination.html">
                <img class="w-full transition-all duration-300 group-hover:scale-150" src="img/bali-img.png" alt="">
                <div
                    class="overlay absolute bottom-0 bg-gradient-to-t from-black to-transparent h-24 w-full laptop:h-60">
                </div>
                <div
                    class="content absolute flex flex-col laptop:gap-2 bottom-4 w-full px-4 md:px-6 md:bottom-6 laptop:px-12 laptop:bottom-8">
                    <h3 class="text-white text-2xl font-semibold tablet:text-3xl laptop:text-5xl">Bali</h3>
                    <p class="text-white text-xl tablet:text-2xl laptop:text-3xl">Indonesia</p>
                    <div
                        class="border-2 absolute right-4 bottom-2 md:right-6 laptop:right-8 border-white rounded-full px-3 py-1 transition-all duration-300 group-hover:bg-white laptop:px-6 laptop:py-4">
                        <i
                            class="fa-solid fa-angle-right text-white transition-all duration-300 group-hover:text-dark laptop:text-3xl"></i>
                    </div>
                </div>
            </a>
            <a class="destination-card group relative overflow-hidden cursor-pointer" href="destination.html">
                <img class="w-full transition-all duration-300 group-hover:scale-150" src="img/maldives-img.png" alt="">
                <div
                    class="overlay absolute bottom-0 bg-gradient-to-t from-black to-transparent h-24 w-full laptop:h-60">
                </div>
                <div
                    class="content absolute flex flex-col laptop:gap-2 bottom-4 w-full px-4 md:px-6 md:bottom-6 laptop:px-12 laptop:bottom-8">
                    <h3 class="text-white text-2xl font-semibold tablet:text-3xl laptop:text-5xl">Maldives</h3>
                    <p class="text-white text-xl tablet:text-2xl laptop:text-3xl">Southwest of India</p>
                    <div
                        class="border-2 absolute right-4 bottom-2 md:right-6 laptop:right-8 border-white rounded-full px-3 py-1 transition-all duration-300 group-hover:bg-white laptop:px-6 laptop:py-4">
                        <i
                            class="fa-solid fa-angle-right text-white transition-all duration-300 group-hover:text-dark laptop:text-3xl"></i>
                    </div>
                </div>
            </a>
            <a class="destination-card group relative overflow-hidden cursor-pointer" href="destination.html">
                <img class="w-full transition-all duration-300 group-hover:scale-150" src="img/singapore-img.png"
                    alt="">
                <div
                    class="overlay absolute bottom-0 bg-gradient-to-t from-black to-transparent h-24 w-full laptop:h-60">
                </div>
                <div
                    class="content absolute flex flex-col laptop:gap-2 bottom-4 w-full px-4 md:px-6 md:bottom-6 laptop:px-12 laptop:bottom-8">
                    <h3 class="text-white text-2xl font-semibold tablet:text-3xl laptop:text-5xl">Singapore</h3>
                    <p class="text-white text-xl tablet:text-2xl laptop:text-3xl">Southeast Asia</p>
                    <div
                        class="border-2 absolute right-4 bottom-2 md:right-6 laptop:right-8 border-white rounded-full px-3 py-1 transition-all duration-300 group-hover:bg-white laptop:px-6 laptop:py-4">
                        <i
                            class="fa-solid fa-angle-right text-white transition-all duration-300 group-hover:text-dark laptop:text-3xl"></i>
                    </div>
                </div>
            </a>
            <a class="destination-card group relative overflow-hidden cursor-pointer" href="destination.html">
                <img class="w-full transition-all duration-300 group-hover:scale-150" src="img/vietnam-img.png" alt="">
                <div
                    class="overlay absolute bottom-0 bg-gradient-to-t from-black to-transparent h-24 w-full laptop:h-60">
                </div>
                <div
                    class="content absolute flex flex-col laptop:gap-2 bottom-4 w-full px-4 md:px-6 md:bottom-6 laptop:px-12 laptop:bottom-8">
                    <h3 class="text-white text-2xl font-semibold tablet:text-3xl laptop:text-5xl">Vietnam</h3>
                    <p class="text-white text-xl tablet:text-2xl laptop:text-3xl">Southeast Asia</p>
                    <div
                        class="border-2 absolute right-4 bottom-2 md:right-6 laptop:right-8 border-white rounded-full px-3 py-1 transition-all duration-300 group-hover:bg-white laptop:px-6 laptop:py-4">
                        <i
                            class="fa-solid fa-angle-right text-white transition-all duration-300 group-hover:text-dark laptop:text-3xl"></i>
                    </div>
                </div>
            </a>
        </div>


        <!-- Footer Real -->
         <!-- Footer -->
    <footer>
        <div
            class="footer-content grid grid-cols-1 px-6 py-10 bg-dark border-t-2 border-t-main gap-10 items-start tablet:grid-cols-2 tablet:p-10 laptop:py-10 laptop:px-32">
            <!-- Logo -->
            <a href="index.html" class="flex items-center place-self-center laptop:place-self-start laptop:self-center">
                <img src="img/logo-luxbali.png" alt="LuxBali Logo" class="w-52 tablet:w-60" />
            </a>
            <div class="content flex gap-5 justify-center tablet:flex-row laptop:gap-24">
                <div class="navigation flex flex-col gap-2">
                    <h3 class="uppercase font-bold text-sm text-white tablet:text-lg">navigation</h3>
                    <ul class="flex flex-col laptop:gap-2">
                        <li><a href="accommodation.html"
                                class="text-white hover:underline duration-100">Accommodation</a></li>
                        <li><a href="destination.html" class="text-white hover:underline duration-100">Destination</a>
                        </li>
                        <li><a href="bali-atraction.html" class="text-white hover:underline duration-100">Bali
                                Attraction</a></li>
                        <li><a href="transport.html" class="text-white hover:underline duration-100">Transport</a>
                        </li>
                        <li><a href="promotion.html" class="text-white hover:underline duration-100">Promotion</a>
                        </li>
                    </ul>
                </div>
                <div class="wrapper flex flex-col tablet:flex-row">
                    <div class="contact flex flex-col gap-2">
                        <h3 class="uppercase font-bold text-sm text-white tablet:text-lg">contact</h3>
                        <ul class="flex flex-col laptop:gap-2">
                            <li><a href="contact.html" class="text-white hover:underline duration-100">Contact
                                    LuxBali</a></li>
                            <li><a href="about.html" class="text-white hover:underline duration-100">About
                                    LuxBali</a>
                            </li>
                        </ul>
                    </div>
                    <div class="socmed flex items-start gap-4 mt-6 flex-col tablet:items-start tablet:ml-6 tablet:mt-0">
                        <h3 class="font-semibold text-sm text-white tablet:text-lg">Follow Us</h3>
                        <ul class="flex gap-2">
                            <li class="flex items-center justify-center">
                                <a href=""
                                    class="text-white px-2 py-1 rounded-lg bg-accent hover:bg-main duration-100"><i
                                        class="text-xl fa-brands fa-whatsapp"></i></a>
                            </li>
                            <li class="flex items-center justify-center">
                                <a href=""
                                    class="text-white px-2 py-1 rounded-lg bg-accent hover:bg-main duration-100"><i
                                        class="text-xl fa-brands fa-instagram"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="copyright flex items-center justify-center p-4 bg-main laptop:p-3">
            <p class="text-white text-center">&copy; <span id="currentYear"></span> Lux Bali. All rights reserved.</p>
        </div>
    </footer>