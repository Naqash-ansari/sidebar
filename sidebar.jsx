import React, { useState, useEffect } from 'react';
import { ProSidebar, SidebarHeader, SidebarFooter, SidebarContent, Menu, MenuItem, SubMenu } from '@randumbwilliam/react-pro-sidebar';
import { FaUser, FaChartBar, FaCog, FaFile } from 'react-icons/fa';
import '@randumbwilliam/react-pro-sidebar/dist/css/styles.css';
import { Link, useLocation } from 'react-router-dom';
import logomain from "../../HTML/assets/img/logo-white.png";
import lgmain from "../../assets/images/logo.png";


const DummyComponent = ({ sideBar, listData }) => {
  const location = useLocation();
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [activeSideBar, setActiveSideBar] = useState(false);
  const parts = location.pathname;

  useEffect(() => {
    // Extract the first part of the path to determine the active submenu
    const parts = 'policy1';
    const active = parts.length > 1 ? parts[1] : null;
    setActiveSubMenu(parts);
    // getScreenList(activeSideBar)
  }, [parts, activeSideBar]);

  const SideBarToggle = () => {
    setActiveSideBar(!activeSideBar)
  }

  let screenList = listData?.data.screens
  console.log('activeSubMenu', screenList);

  return (
    <ProSidebar collapsed={sideBar} className='fixed h-screen' style={{ position: 'fixed' }}>
      <SidebarHeader>
        <div className={`${sideBar ? 'p-8' : 'm-8 p-6 rounded bg-[#1e293b]'} text-center`}>
          {sideBar ?
            <h1 className='font-extrabold	text-[#1e293b] text-2xl'>P</h1>
            :
            ''
          }
          <img src={logomain} alt="logo" className="" />

        </div>
      </SidebarHeader>

      <SidebarContent>
        <Menu iconShape="square">
          <SubMenu title="User" icon={<FaUser />} defaultOpen={activeSubMenu === 'option1'}>
            <MenuItem>
              <Link to='/option1'>Profile</Link>
            </MenuItem>
            <MenuItem>Settings</MenuItem>

            <SubMenu title="Advanced Settings" icon={<FaCog />} defaultOpen={activeSubMenu === 'option1'}>
              <MenuItem>
                <Link to='/option1'>Option 1</Link>
              </MenuItem>
              <MenuItem>Option 2</MenuItem>

              <SubMenu title="More Options" icon={<FaFile />} defaultOpen={activeSubMenu === 'option1'}>
                <MenuItem>File 1</MenuItem>
                <MenuItem>File 2</MenuItem>
              </SubMenu>
            </SubMenu>
          </SubMenu>

          <SubMenu title="Policy" icon={<FaUser />} defaultOpen={parts == '/admin/policy' ? true : false}>
            <MenuItem className={parts == '/admin/policy' ? 'bg-[#1e293b] rounded' : false}>
              <Link to='/admin/policy'>Policy list</Link>
            </MenuItem>
            <MenuItem>Settings</MenuItem>

            <SubMenu title="Advanced Settings" icon={<FaCog />} >
              <MenuItem>
                <Link to='/option1'>Option 1</Link>
              </MenuItem>
              <MenuItem>Option 2</MenuItem>

              <SubMenu title="More Options" icon={<FaFile />} >
                <MenuItem>File 1</MenuItem>
                <MenuItem>File 2</MenuItem>
              </SubMenu>
            </SubMenu>
          </SubMenu>

          {/* Add more SubMenu components for other sections as needed */}

          <MenuItem icon={<FaChartBar />}>Analytics</MenuItem>
        </Menu>
      </SidebarContent>

      <SidebarFooter>
        {/* <div className='p-8 text-center'>
          {sideBar ?
            <h5>Sign</h5>
            :
            <h5>Please Add Sign</h5>
          }

          <label class="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" onClick={SideBarToggle} class="sr-only peer" checked={sideBar} />
            <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Checked toggle</span>
          </label>

        </div> */}
        <div className={`flex justify-center  shadow ${sideBar ? 'p-1 py-3' : 'p-4'}`}>
          <img src={lgmain} alt="logo" className="h-20 w-20 rounded shadow" />
        </div>
      </SidebarFooter>
    </ProSidebar>
  );
}

export default DummyComponent;
