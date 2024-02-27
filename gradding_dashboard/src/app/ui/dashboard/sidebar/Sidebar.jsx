"use client"
import Link from 'next/link'
import Image from 'next/image'
import gradding_logo from "../../../../../public/logo.svg";
import "../../../styles/components/sidebar.scss";
import { usePathname } from 'next/navigation';

const menuItems = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path opacity="0.4" d="M16.0756 2H19.4616C20.8639 2 22.0001 3.14585 22.0001 4.55996V7.97452C22.0001 9.38864 20.8639 10.5345 19.4616 10.5345H16.0756C14.6734 10.5345 13.5371 9.38864 13.5371 7.97452V4.55996C13.5371 3.14585 14.6734 2 16.0756 2Z" fill="white" />
      <path fillRule="evenodd" clipRule="evenodd" d="M4.53852 2H7.92449C9.32676 2 10.463 3.14585 10.463 4.55996V7.97452C10.463 9.38864 9.32676 10.5345 7.92449 10.5345H4.53852C3.13626 10.5345 2 9.38864 2 7.97452V4.55996C2 3.14585 3.13626 2 4.53852 2ZM4.53852 13.4655H7.92449C9.32676 13.4655 10.463 14.6114 10.463 16.0255V19.44C10.463 20.8532 9.32676 22 7.92449 22H4.53852C3.13626 22 2 20.8532 2 19.44V16.0255C2 14.6114 3.13626 13.4655 4.53852 13.4655ZM19.4615 13.4655H16.0755C14.6732 13.4655 13.537 14.6114 13.537 16.0255V19.44C13.537 20.8532 14.6732 22 16.0755 22H19.4615C20.8637 22 22 20.8532 22 19.44V16.0255C22 14.6114 20.8637 13.4655 19.4615 13.4655Z" fill="white" />
    </svg>,
    notification: "",
  },
  {
    title: "Recorded Videos",
    path: "/dashboard/recordedVideo",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15Z" stroke="#53545C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2.51953 7.11035H21.4795" stroke="#53545C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8.51953 2.11035V6.97035" stroke="#53545C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15.4805 2.11035V6.52035" stroke="#53545C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9.75 14.4501V13.2501C9.75 11.7101 10.84 11.0801 12.17 11.8501L13.21 12.4501L14.25 13.0501C15.58 13.8201 15.58 15.0801 14.25 15.8501L13.21 16.4501L12.17 17.0501C10.84 17.8201 9.75 17.1901 9.75 15.6501V14.4501V14.4501Z" stroke="#53545C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>,
    notification: "3",
  },
  {
    title: "Mock Tests",
    path: "/dashboard/mock-test",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.3701 8.87988H17.6201" stroke="#53545C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6.37988 8.87988L7.12988 9.62988L9.37988 7.37988" stroke="#53545C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12.3701 15.8799H17.6201" stroke="#53545C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6.37988 15.8799L7.12988 16.6299L9.37988 14.3799" stroke="#53545C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#53545C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>,
    notification: "2",
  },
  {
    title: "Practice Tests",
    path: "/dashboard/practice-test",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 2V5" stroke="#53545C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 2V5" stroke="#53545C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7 13H15" stroke="#53545C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7 17H12" stroke="#53545C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 3.5C19.33 3.68 21 4.95 21 9.65V15.83C21 19.95 20 22.01 15 22.01H9C4 22.01 3 19.95 3 15.83V9.65C3 4.95 4.67 3.69 8 3.5H16Z" stroke="#53545C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>,
    notification: "4",
  },
  {
    title: "Study Materials",
    path: "/dashboard/study-materials",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.5 18V7C3.5 3 4.5 2 8.5 2H15.5C19.5 2 20.5 3 20.5 7V17C20.5 17.14 20.5 17.28 20.49 17.42" stroke="#53545C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6.35 15H20.5V18.5C20.5 20.43 18.93 22 17 22H7C5.07 22 3.5 20.43 3.5 18.5V17.85C3.5 16.28 4.78 15 6.35 15Z" stroke="#53545C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 7H16" stroke="#53545C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 10.5H13" stroke="#53545C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>,
    notification: "1",
  },
  {
    title: "Attendance",
    path: "/dashboard/attandance",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 2V5" stroke="#53545C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 2V5" stroke="#53545C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3.5 9.08984H20.5" stroke="#53545C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="#53545C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11.9955 13.7002H12.0045" stroke="#53545C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8.29431 13.7002H8.30329" stroke="#53545C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8.29431 16.7002H8.30329" stroke="#53545C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>,
    notification: "",
  },
  {
    title: "Plans",
    path: "/dashboard/plans",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 7V17C18 17.62 17.98 18.17 17.91 18.66C17.62 21.29 16.38 22 13 22H11C7.62 22 6.38 21.29 6.09 18.66C6.02 18.17 6 17.62 6 17V7C6 6.38 6.02 5.83 6.09 5.34C6.38 2.71 7.62 2 11 2H13C16.38 2 17.62 2.71 17.91 5.34C17.98 5.83 18 6.38 18 7Z" stroke="#53545C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 17.0001C6 17.6201 6.02 18.1701 6.09 18.6601C5.95 18.6701 5.82 18.6701 5.67 18.6701H5.33C2.67 18.6701 2 18.0001 2 15.3301V8.67008C2 6.00008 2.67 5.33008 5.33 5.33008H5.67C5.82 5.33008 5.95 5.33008 6.09 5.34008C6.02 5.83008 6 6.38008 6 7.00008V17.0001Z" stroke="#53545C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22.0002 8.67008V15.3301C22.0002 18.0001 21.3302 18.6701 18.6702 18.6701H18.3302C18.1802 18.6701 18.0502 18.6701 17.9102 18.6601C17.9802 18.1701 18.0002 17.6201 18.0002 17.0001V7.00008C18.0002 6.38008 17.9802 5.83008 17.9102 5.34008C18.0502 5.33008 18.1802 5.33008 18.3302 5.33008H18.6702C21.3302 5.33008 22.0002 6.00008 22.0002 8.67008Z" stroke="#53545C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>,
    notification: "",
  },
  {
    title: "Book My IELTS Exam",
    path: "/dashboard/book-ielts-exam",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 2V5" stroke="#53545C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 2V5" stroke="#53545C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3.5 9.08984H20.5" stroke="#53545C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22 19C22 19.75 21.79 20.46 21.42 21.06C20.73 22.22 19.46 23 18 23C16.99 23 16.07 22.63 15.37 22C15.06 21.74 14.79 21.42 14.58 21.06C14.21 20.46 14 19.75 14 19C14 16.79 15.79 15 18 15C19.2 15 20.27 15.53 21 16.36C21.62 17.07 22 17.99 22 19Z" stroke="#53545C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16.4404 18.9995L17.4304 19.9895L19.5604 18.0195" stroke="#53545C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M21 8.5V16.36C20.27 15.53 19.2 15 18 15C15.79 15 14 16.79 14 19C14 19.75 14.21 20.46 14.58 21.06C14.79 21.42 15.06 21.74 15.37 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="#53545C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11.9955 13.7002H12.0045" stroke="#53545C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8.29431 13.7002H8.30329" stroke="#53545C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8.29431 16.7002H8.30329" stroke="#53545C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>,
    notification: "",
  },

];

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <section className="side-bar-sec">
      <div className="logo-div">
        <Image className="logo-img" src={gradding_logo} width={"161px"} height={"48px"} alt="logo" />
      </div>
      <div className="content">
        <div className="upper-content">
          {
            menuItems.map((item) => {

              return <Link href={item.path} key={item.title} className={`upper-btns ${pathname === item.path && 'active'}`}>
                <span className="span-img">
                  {item.icon}
                </span>
                {item.title}
                {item.notification ? (
                  <span className="pop-up-num">{item.notification}</span>
                ) : (
                  <span className="pop-up-num" style={{ display: 'none' }}>
                    {item.notification}
                  </span>
                )}
              </Link>
            })
          }
        </div>
        <div className="lower-content">
          <a href="/" className="lower-btns contact-btn">
            <span className="span-img">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 18V12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12V18" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M21 19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H18C17.4696 21 16.9609 20.7893 16.5858 20.4142C16.2107 20.0391 16 19.5304 16 19V16C16 15.4696 16.2107 14.9609 16.5858 14.5858C16.9609 14.2107 17.4696 14 18 14H21V19ZM3 19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H6C6.53043 21 7.03914 20.7893 7.41421 20.4142C7.78929 20.0391 8 19.5304 8 19V16C8 15.4696 7.78929 14.9609 7.41421 14.5858C7.03914 14.2107 6.53043 14 6 14H3V19Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            Contact Support
          </a>
          {/* <a href="javascript:;" className="lower-btns gift-btn">
            <span className="gift-span span-btn">
              <span className="span-img">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 12V22H4V12" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M22 7H2V12H22V7Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 22V7" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 7H16.5C17.163 7 17.7989 6.73661 18.2678 6.26777C18.7366 5.79893 19 5.16304 19 4.5C19 3.83696 18.7366 3.20107 18.2678 2.73223C17.7989 2.26339 17.163 2 16.5 2C13 2 12 7 12 7Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 7H7.5C6.83696 7 6.20107 6.73661 5.73223 6.26777C5.26339 5.79893 5 5.16304 5 4.5C5 3.83696 5.26339 3.20107 5.73223 2.73223C6.20107 2.26339 6.83696 2 7.5 2C11 2 12 7 12 7Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              Free Gift Awaits You!
            </span>
            <p className="gift-btn-p">Upgrade your account</p>
          </a> */}
          <a href="/" className="lower-btns logout-btn">
            <span className="span-img">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.4" d="M0 4.447C0 1.996 2.03024 0 4.52453 0H9.48564C11.9748 0 14 1.99 14 4.437V15.553C14 18.005 11.9698 20 9.47445 20H4.51537C2.02515 20 0 18.01 0 15.563V14.623V4.447Z" fill="#CC5F5F" />
                <path d="M19.7792 9.45504L16.9334 6.54604C16.6393 6.24604 16.166 6.24604 15.8728 6.54804C15.5807 6.85004 15.5816 7.33704 15.8748 7.63704L17.434 9.23004H15.9391H7.54875C7.13483 9.23004 6.79883 9.57504 6.79883 10C6.79883 10.426 7.13483 10.77 7.54875 10.77H17.434L15.8748 12.363C15.5816 12.663 15.5807 13.15 15.8728 13.452C16.0199 13.603 16.2118 13.679 16.4046 13.679C16.5955 13.679 16.7873 13.603 16.9334 13.454L19.7792 10.546C19.9204 10.401 20.0003 10.205 20.0003 10C20.0003 9.79604 19.9204 9.60004 19.7792 9.45504Z" fill="#CC5F5F" />
              </svg>
            </span>
            Logout
          </a>
        </div>
      </div>
    </section>
  )
}

export default Sidebar