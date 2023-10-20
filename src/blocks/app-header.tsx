import Link from "next/link";

export default function AppHeader() {
  return (
    <header className="w-full h-20 fixed top-0 left-0 right-0 bg-transparent backdrop-blur-3xl">
      <nav className="w-full h-full mx-auto flex max-w-[95vw] p-6 lg:px-8 gap-2">
        <div className="flex basis-1/3 items-center justify-start">
          <Link href={"/"} className="h-full w-fit">
            <svg
              className="h-full w-fit"
              width="200"
              height="108"
              viewBox="0 0 200 108"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M163.839 94.8798C162.507 93.4674 161.176 92.0549 159.857 90.631C158.473 89.2401 157.133 87.8907 155.822 86.5714C152.659 83.3881 149.67 80.3798 146.667 77.3855C141.433 72.1667 141.423 72.1768 136.07 77.5899L136.051 77.6095C133.447 80.2421 130.834 82.8651 128.22 85.488C122.013 91.7179 115.805 97.9476 109.733 104.307C106.763 107.418 104.584 107.759 101.625 104.44C98.5319 100.971 95.3251 97.6027 92.1181 94.2345C90.2785 92.3025 88.4388 90.3703 86.6204 88.4189C83.7346 85.3219 81.3622 84.6969 78.0766 88.415C74.9655 91.9356 71.6011 95.2302 68.2355 98.5261C66.0022 100.713 63.7682 102.901 61.6074 105.155C58.7033 108.185 56.4468 107.762 53.7326 104.882C45.9946 96.6721 38.0248 88.688 30.0546 80.7033C20.8486 71.4808 11.6419 62.2574 2.79063 52.684C-0.305984 49.3348 -0.460709 47.0993 2.56355 43.9481C3.23241 43.2512 3.83242 42.6067 4.37869 42.0199C9.14684 36.8984 9.82036 36.1749 16.4413 43.3644C24.2025 51.792 32.3553 59.8574 40.5091 67.924C45.153 72.5181 49.7972 77.1126 54.3696 81.7744C57.2221 84.6827 59.1038 84.168 61.6959 81.4811C74.8743 67.821 88.1217 54.2253 101.516 40.7774C104.809 37.4711 105.135 34.701 101.736 31.5275C101.512 31.3188 101.312 31.0859 101.111 30.8528C100.985 30.7062 100.859 30.5596 100.727 30.419C94.0624 23.3147 93.377 23.2355 86.7019 30.064C82.3356 34.5306 78.0134 39.0401 73.6912 43.5496C69.834 47.574 65.9768 51.5983 62.0883 55.5922C57.8088 59.9876 56.6763 60.0221 52.6528 55.2031C47.1061 48.5599 40.9739 42.4898 34.8422 36.4201C31.9867 33.5934 29.1312 30.7669 26.3351 27.8826C21.9489 23.3582 21.2439 23.4688 16.7075 28.0251C13.2114 31.5365 11.4977 33.2588 9.80737 33.2362C8.08405 33.2131 6.38503 31.3762 2.84628 27.7722C-0.390804 24.4754 -0.513737 22.4396 2.81159 19.2465C5.75008 16.4248 8.49432 13.4029 11.2394 10.3799C13.085 8.34754 14.931 6.31473 16.8367 4.34203C21.1812 -0.155215 21.6745 -0.113661 25.9962 4.21521C28.0319 6.25425 30.0712 8.28983 32.1106 10.3254C39.3885 17.59 46.6668 24.8548 53.779 32.2784C56.9911 35.6311 59.1176 35.5303 62.2369 32.1611C66.9103 27.1134 71.6942 22.1683 76.4783 17.2231C80.607 12.9554 84.7358 8.68751 88.7937 4.35349C92.0284 0.898603 94.7119 0.706365 97.9177 4.23472C102.614 9.40307 107.427 14.4685 112.289 19.481C116.931 24.2653 118.696 24.2788 122.997 19.0238C125.745 15.6663 128.772 12.5875 131.798 9.50983C133.551 7.72772 135.303 5.94598 137 4.11071C140.071 0.788942 142.661 0.855226 145.772 4.09594C162.824 21.8639 179.948 39.5639 197.105 57.2311C199.258 59.4476 199.463 61.1504 197.269 63.5706L197.094 63.7643C189.39 72.2635 189.314 72.3476 181.332 64.0871C177.045 59.6512 172.648 55.3232 168.252 50.9952C160.304 43.172 152.356 35.3489 145.062 26.8888C142.962 24.4532 140.735 23.989 138.283 26.5056C127.032 38.0483 115.769 49.5786 104.506 61.109C101.694 63.9876 98.8823 66.8663 96.0706 69.7451C94.8976 70.9461 94.5115 72.2135 95.4434 73.7826C97.6129 77.4354 100.728 80.2398 104.029 82.725C106.098 84.2828 107.69 82.6462 109.109 81.1872C109.248 81.0443 109.386 80.9032 109.522 80.7669C111.925 78.3578 114.333 75.9539 116.742 73.55C123.651 66.655 130.559 59.7599 137.34 52.7411C140.323 49.6534 142.52 49.3915 145.518 52.6429C149.038 56.4606 152.73 60.1128 156.422 63.7657C161.487 68.7772 166.554 73.7902 171.183 79.2341C176.054 84.9623 177.454 84.844 182.636 79.5496C183.06 79.1162 183.496 78.6943 183.932 78.2725C184.575 77.6513 185.217 77.0302 185.82 76.3727C187.987 74.0106 189.938 74.2142 192.168 76.441C197.361 81.6291 199.561 83.6223 199.41 85.4184C199.261 87.2001 196.799 88.7879 192.654 93.108C191.085 94.7425 189.475 96.3377 187.864 97.9327C185.567 100.209 183.269 102.484 181.096 104.873C178.25 108 175.974 108.404 173.02 104.944C170.073 101.492 166.956 98.1861 163.839 94.8798Z"
                fill="white"
              />
            </svg>
          </Link>
        </div>
        <div className="flex basis-1/3 items-center justify-center"></div>
        <div className="flex basis-1/3 items-center justify-end gap-12">
          <Link href={"/blogs"}>
            <p className="text-white">Blog</p>
          </Link>
          <Link href={"/contact"}>
            <p className="text-white">Contact</p>
          </Link>
        </div>
      </nav>
    </header>
  );
}
