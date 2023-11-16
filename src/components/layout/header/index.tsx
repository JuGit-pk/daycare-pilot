import Image from "next/image";
import Navbar from "../navbar";
import { cn } from "@/lib/utils";
import Container from "../container";
interface IProps {
  className?: string;
  children?: React.ReactNode;
  isBear?: boolean;
}
const Header = ({ children, className, isBear = true }: IProps) => {
  return (
    <header
      className={cn(
        "bg-[#FBB821] pb-96 2xl:pb-[340px] pt-28 relative",
        className
      )}
    >
      <Container className="px-36 relative">
        <Navbar className="mb-[88px]" />
        {/* relaaavent position vector image */}
        <Image
          src="/assets/rocket.svg"
          className="absolute top-28 right-16 z-10 h-32"
          alt="rocket"
          width={116}
          height={116}
        />
        {isBear && (
          <Image
            src="/assets/bear.svg"
            className="absolute top-60 left-10 z-10 h-32"
            alt="bear"
            width={150}
            height={300}
          />
        )}
        {children}
      </Container>
      {/* clouds */}
      <div className="absolute inset-x-0 -bottom-1 2xl:bottom-0">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1600 356"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1626.35 57.5452C1619.17 57.5293 1612.12 59.0947 1605.94 62.0747C1605.94 61.6938 1605.94 61.3295 1605.94 60.9486C1605.94 51.2947 1602.13 41.8947 1595.08 34.1225C1588.02 26.3502 1578.08 20.6133 1566.72 17.7501C1555.36 14.8869 1543.17 15.0477 1531.93 18.2089C1520.69 21.37 1510.99 27.3659 1504.25 35.3201C1501.64 30.8332 1497.86 26.8606 1493.17 23.6778C1488.48 20.4951 1482.99 18.1784 1477.09 16.8887C1471.19 15.599 1465.01 15.3671 1458.98 16.2091C1452.96 17.0511 1447.23 18.9468 1442.2 21.7647C1435.45 13.7517 1425.96 7.50813 1414.91 3.79673C1403.86 0.085329 1391.71 -0.933291 1379.95 0.865287C1368.2 2.66387 1357.34 7.20179 1348.71 13.9248C1340.08 20.6478 1334.05 29.2648 1331.35 38.7234C1315.11 33.5426 1297.23 32.8379 1280.45 36.7178C1263.67 40.5977 1248.93 48.8471 1238.49 60.195C1227.01 49.8871 1212.42 42.1817 1196.16 37.8367C1179.89 33.4916 1162.52 32.6565 1145.73 35.4136C1128.95 38.1706 1113.34 44.4248 1100.44 53.5611C1087.54 62.6973 1077.8 74.401 1072.16 87.521C1058.75 84.6664 1044.72 84.3439 1031.14 86.5781C1017.56 88.8123 1004.78 93.5439 993.807 100.409C982.83 107.274 973.939 116.091 967.817 126.18C961.695 136.27 958.505 147.364 958.492 158.61C958.492 161.094 958.645 163.479 958.931 165.864C955.079 165.319 951.177 165.042 947.267 165.036C937.481 165.022 927.809 166.746 918.93 170.087C913.713 163.345 905.991 158.123 896.878 155.174C887.766 152.226 877.734 151.703 868.232 153.683C858.73 155.662 850.249 160.041 844.013 166.186C837.777 172.332 834.109 179.926 833.539 187.874C829.589 186.503 825.335 185.802 821.039 185.812C816.33 185.809 811.678 186.652 807.418 188.28C803.157 189.908 799.393 192.28 796.395 195.227C785.997 190.353 773.748 188.764 761.996 190.764C761.926 182.761 759.545 174.883 755.042 167.764C750.539 160.644 744.041 154.48 736.07 149.768C728.099 145.056 718.877 141.927 709.145 140.632C699.413 139.338 689.442 139.914 680.034 142.314C680.269 141.163 680.544 140.012 680.687 138.828C682.417 124.913 677.958 110.956 668.117 99.4754C658.275 87.9951 643.699 79.7487 627.021 76.2256C610.343 72.7024 592.662 74.1346 577.171 80.2636C561.68 86.3926 549.401 96.8143 542.55 109.647C533.434 105.919 523.1 104.623 513.021 105.941C502.943 107.26 493.636 111.128 486.426 116.992C477.373 113.75 467.415 112.535 457.588 113.474C447.76 114.414 438.423 117.473 430.546 122.333C426.919 123.488 423.476 124.992 420.291 126.813C416.971 115.922 410.478 105.837 401.357 97.4051C392.237 88.9734 380.756 82.4414 367.879 78.3578C355.002 74.2743 341.105 72.7586 327.356 73.9381C313.607 75.1176 300.408 78.9579 288.868 85.1362C289.05 83.908 289.138 82.6719 289.133 81.4348C289.135 77.27 288.125 73.1457 286.162 69.2975C284.199 65.4492 281.322 61.9524 277.693 59.0067C274.065 56.0609 269.757 53.7239 265.016 52.1291C260.275 50.5343 255.193 49.7129 250.061 49.7118C244.803 49.6868 239.595 50.5321 234.754 52.196C234.029 42.5095 229.534 33.2595 221.918 25.7776C214.302 18.2956 203.957 12.9675 192.372 10.5601C180.787 8.15281 168.559 8.79042 157.449 12.3812C146.339 15.972 136.92 22.3307 130.546 30.5422C115.528 24.9102 98.7693 23.0757 82.449 25.2771C66.1287 27.4785 51.0024 33.614 39.0373 42.8857C27.0722 52.1574 18.8221 64.1361 15.3598 77.264C11.8976 90.392 13.3835 104.062 19.6243 116.495C4.59273 118.647 -9.02315 125.029 -18.8305 134.52C-28.6378 144.011 -34.0089 156.003 -34 168.389C-34 168.804 -34 169.218 -34 169.632V355.97H1666.37V90.0135C1666.37 85.749 1665.34 81.5263 1663.33 77.5865C1661.32 73.6468 1658.37 70.0671 1654.65 67.052C1650.93 64.037 1646.52 61.6456 1641.67 60.0144C1636.81 58.3832 1631.61 57.5442 1626.35 57.5452Z"
            fill="white"
          />
        </svg>
      </div>
    </header>
  );
};

export default Header;