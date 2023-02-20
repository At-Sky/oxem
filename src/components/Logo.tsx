import React, {useEffect, useState} from 'react';

interface ILogo {
    className: any
}
function Logo({className}: ILogo): JSX.Element {
    let [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        if (window.innerWidth <= 320) {
            setIsMobile(true)
        }
    }, [])

    return (
        <svg className={className} width="200" height="35" viewBox="0 0 200 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 27.1001H18.6313V21.0779H6.21045V1.88195H0V27.1001Z" fill="#FF9514"/>
            <path
                d="M29.2356 7.71601C23.4391 7.71601 19.3741 12.0445 19.3741 17.6904C19.3741 22.9598 22.6864 27.6647 29.1226 27.6647C33.6017 27.6647 37.4785 25.3687 38.683 21.0779H32.6231C32.0209 22.0189 30.4776 22.6211 29.0474 22.5082C26.8643 22.32 25.6222 21.0402 25.2458 19.61H38.7959C39.5487 12.7596 35.5213 7.71601 29.2356 7.71601ZM29.1979 12.8349C31.0422 12.8349 32.5102 13.7006 33.0371 15.2815H25.3211C25.848 13.7759 27.316 12.8349 29.1979 12.8349Z"
                fill="#FF9514"/>
            <path
                d="M54.7842 10.5766H54.6337C53.5045 8.9581 51.4344 7.71601 48.8373 7.71601C43.6807 7.71601 40.1427 11.9692 40.1427 17.7656C40.1427 23.7126 43.9066 27.6647 48.8373 27.6647C51.4344 27.6647 53.5045 26.4226 54.6337 24.8041H54.7842V27.1001H60.5807V8.2806H54.7842V10.5766ZM50.4181 22.1694C47.9339 22.1694 46.052 20.3251 46.052 17.6904C46.052 15.0556 47.9339 13.2113 50.4181 13.2113C52.9399 13.2113 54.7842 15.1309 54.7842 17.6904C54.7842 20.1369 53.0152 22.1694 50.4181 22.1694Z"
                fill="#FF9514"/>
            <path
                d="M68.928 8.2806C65.3147 8.2806 62.4917 10.6519 62.4917 14.077C62.4917 16.6365 64.4866 18.5937 67.2719 19.1959L74.1222 20.6638C74.3857 20.7391 74.461 20.9273 74.461 21.0779C74.461 21.2661 74.3104 21.4543 74.0469 21.4543H63.2822V27.1001H74.0846C77.6979 27.1001 80.5961 24.6912 80.5961 21.2284C80.5961 18.5561 78.6765 16.5612 75.7783 15.9966L69.0409 14.6792C68.8527 14.6416 68.7022 14.4534 68.7022 14.3028C68.7022 14.1146 68.8527 13.9265 69.1162 13.9265H79.2411V8.2806H68.928Z"
                fill="#FF9514"/>
            <path d="M82.5095 0V6.21045H88.3436V0H82.5095ZM82.5095 8.2806V27.1001H88.3436V8.2806H82.5095Z"
                  fill="#FF9514"/>
            <path
                d="M102.767 7.75365C100.66 7.75365 98.6646 8.69462 97.4226 10.426H97.272V8.2806H91.5885V27.1001H97.4226V17.1634C97.4226 14.8298 99.2292 13.5124 100.961 13.5124C102.504 13.5124 104.122 14.5663 104.122 16.9752V27.1001H109.956V16.1848C109.956 10.6895 107.246 7.75365 102.767 7.75365Z"
                fill="#FF9514"/>
            <path
                d="M126.35 10.5766H126.199C125.07 8.9581 123 7.71601 120.403 7.71601C115.246 7.71601 111.708 11.9692 111.708 17.7656C111.708 23.7126 115.472 27.6647 120.403 27.6647C123 27.6647 125.07 26.4226 126.199 24.8041H126.35V27.5518C126.35 28.3046 125.785 28.7562 124.995 28.7562H114.193V34.6279H126.425C130.039 34.6279 132.146 32.6707 132.146 29.095V8.2806H126.35V10.5766ZM121.984 22.1694C119.5 22.1694 117.618 20.3251 117.618 17.6904C117.618 15.0556 119.5 13.2113 121.984 13.2113C124.506 13.2113 126.35 15.1309 126.35 17.6904C126.35 20.1369 124.581 22.1694 121.984 22.1694Z"
                fill="#FF9514"/>
            <path
                d="M154.223 16.599C153.546 19.6477 151.062 21.5673 147.712 21.5673C143.308 21.5673 140.937 18.2174 140.937 14.4912C140.937 10.6896 143.346 7.49031 147.636 7.41504C151.062 7.33976 153.358 9.33463 154.073 12.1199H160.509C159.794 6.06003 154.825 1.3175 147.712 1.3175C139.732 1.3175 134.613 7.26448 134.613 14.5665C134.613 21.7932 139.732 27.6649 147.712 27.6649C155.014 27.6649 159.944 22.8847 160.584 16.599H154.223Z"
                fill={isMobile ? "#ffffff": "#111111"}/>
            <path
                d="M176.633 10.5767H176.483C175.354 8.95824 173.284 7.71615 170.687 7.71615C165.53 7.71615 161.992 11.9694 161.992 17.7658C161.992 23.7128 165.756 27.6649 170.687 27.6649C173.284 27.6649 175.354 26.4228 176.483 24.8043H176.633V27.1003H182.43V8.28074H176.633V10.5767ZM172.267 22.1695C169.783 22.1695 167.901 20.3252 167.901 17.6905C167.901 15.0558 169.783 13.2115 172.267 13.2115C174.789 13.2115 176.633 15.131 176.633 17.6905C176.633 20.137 174.864 22.1695 172.267 22.1695Z"
                fill={isMobile ? "#ffffff": "#111111"}/>
            <path
                d="M195.323 8.28074C193.403 8.28074 191.86 9.40991 191.333 11.1037H191.182V8.28074H185.65V27.1003H191.484V17.5776C191.484 15.5827 192.951 14.1148 194.946 14.1148H199.501V8.28074H195.323Z"
                fill={isMobile ? "#ffffff": "#111111"}/>
        </svg>
    );
}

export default Logo;