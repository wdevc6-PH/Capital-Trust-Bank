// import { useState } from "react";
import { MdAttachMoney, MdOutlineImportantDevices } from 'react-icons/md';
import { GiPayMoney, GiReceiveMoney } from 'react-icons/gi';
import {RiAccountCircleLine } from 'react-icons/ri';
import { Link, NavLink } from 'react-router-dom';
import '../../../App.css';
import logo from '../../../assets/logo/mainlogo.png';


const CustomerLeft = () => {
  // const [subMenu, setSubMenu] = useState(false);

  return (
    <>
      <div className="text-white">
        <div className="text-white w-[70%] flex items-center justify-center ml-[-17px] py-[10px]">
          <Link
            className="navbar-brand font-bold text-2xl flex items-center"
            to="/"
          >
            <img src={logo} alt="" srcSet="" />
            <span className="font-bold text-[32px] ml-1 text-[#fff]">
              C<span className=" text-[#DF0303]">T</span>B
            </span>
          </Link>
        </div>

        {/* ---------LINK ------------- */}
        <div className="mt-[40px]">
          <NavLink
            to="/dashboard/myAccount"
            className={({ isActive }) =>
              isActive
                ? "border-l-2 link flex items-center px-[20px] py-[15px]"
                : "flex px-[20px] link py-[15px]"
            }
          >
            <span>
              {" "}
              <RiAccountCircleLine />
            </span>
            <span className="text-white ml-[10px]">My Account</span>
          </NavLink>

          <NavLink
            to="/dashboard/myTransaction"
            // onClick={() => setSubMenu(!subMenu)}
            className={({ isActive }) =>
              isActive
                ? "border-l-2 link flex items-center px-[20px] py-[15px]"
                : "flex px-[20px] link py-[15px]"
            }
          >
            <span>
              {" "}
              <MdAttachMoney />
            </span>
            <span className="text-white ml-[10px]">Transaction</span>
            {/* <span className={`${subMenu ? 'rotate-180' : 'rotate-0'}`}><ExpandMoreIcon /></span> */}
          </NavLink>

          <NavLink
            to="/dashboard/my-deposit"            
            className={({ isActive }) =>
              isActive
                ? "border-l-2 link flex items-center px-[20px] py-[15px]"
                : "flex px-[20px] link py-[15px]"
            }
          >
            <span>
              {" "}
              <GiPayMoney />
            </span>
            <span className="text-white ml-[10px]">Deposit</span>            
          </NavLink>

          <NavLink
            to="/dashboard/my-withdraw"            
            className={({ isActive }) =>
              isActive
                ? "border-l-2 link flex items-center px-[20px] py-[15px]"
                : "flex px-[20px] link py-[15px]"
            }
          >
            <span>
              {" "}
              <GiReceiveMoney />
            </span>
            <span className="text-white ml-[10px]">Withdraw</span>            
          </NavLink>


          
          <NavLink
            to="/dashboard/deviceActivity"            
            className={({ isActive }) =>
              isActive
                ? "border-l-2 link flex items-center px-[20px] py-[15px]"
                : "flex px-[20px] link py-[15px]"
            }
          >
            <span>
              {/* {" "} */}
              <MdOutlineImportantDevices />
            </span>
            <span className="text-white ml-[10px]">Device Activity</span>            
          </NavLink>

          {/* -------Sub Menu ----------- */}
          {/* <div className={`${subMenu ? 'block' : 'hidden'} duration-500 transition-all flex flex-col px-[20px] py-[15px]`}>
                        <NavLink to='/dashboard/my-deposit'
                            className='flex items-center link py-[10px] px-[5px] rounded-md'
                        >
                            <span> <CloudCircleOutlinedIcon /></span>
                            <span className='text-white ml-[10px]'>My Deposit</span>
                        </NavLink>

                        <NavLink
                            to='/dashboard/my-withdraw'
                            className='flex items-center link py-[10px] px-[5px] rounded-md'
                        >
                            <span> <CloudCircleOutlinedIcon /></span>
                            <span className='text-white ml-[10px]'>My Withdraw</span>
                        </NavLink>

                        <NavLink
                            to='/dashboard/my-balance'
                            className='flex items-center link py-[10px] px-[5px] rounded-md'
                        >
                            <span> <CloudCircleOutlinedIcon /></span>
                            <span className='text-white ml-[10px]'>My Balance</span>
                        </NavLink>
                    </div> */}
        </div>
      </div>
    </>
  );
};

export default CustomerLeft;
