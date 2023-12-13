import React from "react";
import "./profile.css";

function Profile() {
  return (
    <>
      <>
        {/* 
      //   <div className="ui-theme-settings" style={{ height: "675px" }}>
      //     <button
      //       type="button"
      //       id="TooltipDemo"
      //       className="btn-open-options btn btn-warning"
      //     >
      //       <i className="fa fa-cog fa-w-16 fa-spin fa-2x" />
      //     </button>
      //     <div className="theme-settings__inner">
      //       <div className="scrollbar-container">
      //         <div className="theme-settings__options-wrapper">
      //           <h3 className="themeoptions-heading">Layout Options</h3>
      //           <div className="p-3">
      //             <ul className="list-group">
      //               <li className="list-group-item">
      //                 <div className="widget-content p-0">
      //                   <div className="widget-content-wrapper">
      //                     <div className="widget-content-left mr-3">
      //                       <div
      //                         className="switch has-switch switch-container-class"
      //                         data-class="fixed-header"
      //                       >
      //                         <div className="switch-animate switch-on">
      //                           <input
      //                             type="checkbox"
      //                             defaultChecked=""
      //                             data-toggle="toggle"
      //                             data-onstyle="success"
      //                           />
      //                         </div>
      //                       </div>
      //                     </div>
      //                     <div className="widget-content-left">
      //                       <div className="widget-heading">Fixed Header</div>
      //                       <div className="widget-subheading">
      //                         Makes the header top fixed, always visible!
      //                       </div>
      //                     </div>
      //                   </div>
      //                 </div>
      //               </li>
      //               <li className="list-group-item">
      //                 <div className="widget-content p-0">
      //                   <div className="widget-content-wrapper">
      //                     <div className="widget-content-left mr-3">
      //                       <div
      //                         className="switch has-switch switch-container-class"
      //                         data-class="fixed-sidebar"
      //                       >
      //                         <div className="switch-animate switch-on">
      //                           <input
      //                             type="checkbox"
      //                             defaultChecked=""
      //                             data-toggle="toggle"
      //                             data-onstyle="success"
      //                           />
      //                         </div>
      //                       </div>
      //                     </div>
      //                     <div className="widget-content-left">
      //                       <div className="widget-heading">Fixed Sidebar</div>
      //                       <div className="widget-subheading">
      //                         Makes the sidebar left fixed, always visible!
      //                       </div>
      //                     </div>
      //                   </div>
      //                 </div>
      //               </li>
      //               <li className="list-group-item">
      //                 <div className="widget-content p-0">
      //                   <div className="widget-content-wrapper">
      //                     <div className="widget-content-left mr-3">
      //                       <div
      //                         className="switch has-switch switch-container-class"
      //                         data-class="fixed-footer"
      //                       >
      //                         <div className="switch-animate switch-off">
      //                           <input
      //                             type="checkbox"
      //                             data-toggle="toggle"
      //                             data-onstyle="success"
      //                           />
      //                         </div>
      //                       </div>
      //                     </div>
      //                     <div className="widget-content-left">
      //                       <div className="widget-heading">Fixed Footer</div>
      //                       <div className="widget-subheading">
      //                         Makes the app footer bottom fixed, always visible!
      //                       </div>
      //                     </div>
      //                   </div>
      //                 </div>
      //               </li>
      //             </ul>
      //           </div>
      //           <h3 className="themeoptions-heading">
      //             <div>Header Options</div>
      //             <button
      //               type="button"
      //               className="btn-pill btn-shadow btn-wide ml-auto btn btn-focus btn-sm switch-header-cs-class"
      //               data-class=""
      //             >
      //               Restore Default
      //             </button>
      //           </h3>
      //           <div className="p-3">
      //             <ul className="list-group">
      //               <li className="list-group-item">
      //                 <h5 className="pb-2">Choose Color Scheme</h5>
      //                 <div className="theme-settings-swatches">
      //                   <div
      //                     className="swatch-holder bg-primary switch-header-cs-class"
      //                     data-class="bg-primary header-text-light"
      //                   ></div>
      //                   <div
      //                     className="swatch-holder bg-secondary switch-header-cs-class"
      //                     data-class="bg-secondary header-text-light"
      //                   ></div>
      //                   <div
      //                     className="swatch-holder bg-success switch-header-cs-class"
      //                     data-class="bg-success header-text-dark"
      //                   ></div>
      //                   <div
      //                     className="swatch-holder bg-info switch-header-cs-class"
      //                     data-class="bg-info header-text-dark"
      //                   ></div>
      //                   <div
      //                     className="swatch-holder bg-warning switch-header-cs-class"
      //                     data-class="bg-warning header-text-dark"
      //                   ></div>
      //                   <div
      //                     className="swatch-holder bg-danger switch-header-cs-class"
      //                     data-class="bg-danger header-text-light"
      //                   ></div>
      //                   <div
      //                     className="swatch-holder bg-light switch-header-cs-class"
      //                     data-class="bg-light header-text-dark"
      //                   ></div>
      //                   <div
      //                     className="swatch-holder bg-dark switch-header-cs-class"
      //                     data-class="bg-dark header-text-light"
      //                   ></div>
      //                   <div
      //                     className="swatch-holder bg-focus switch-header-cs-class"
      //                     data-class="bg-focus header-text-light"
      //                   ></div>
      //                   <div
      //                     className="swatch-holder bg-alternate switch-header-cs-class"
      //                     data-class="bg-alternate header-text-light"
      //                   ></div>
      //                   <div className="divider"></div>
      //                   <div
      //                     className="swatch-holder bg-vicious-stance switch-header-cs-class"
      //                     data-class="bg-vicious-stance header-text-light"
      //                   ></div>
      //                   <div
      //                     className="swatch-holder bg-midnight-bloom switch-header-cs-class"
      //                     data-class="bg-midnight-bloom header-text-light"
      //                   ></div>
      //                   <div
      //                     className="swatch-holder bg-night-sky switch-header-cs-class"
      //                     data-class="bg-night-sky header-text-light"
      //                   ></div>
      //                   <div
      //                     className="swatch-holder bg-slick-carbon switch-header-cs-class"
      //                     data-class="bg-slick-carbon header-text-light"
      //                   ></div>
      //                   <div
      //                     className="swatch-holder bg-asteroid switch-header-cs-class"
      //                     data-class="bg-asteroid header-text-light"
      //                   ></div>
      //                   <div
      //                     className="swatch-holder bg-royal switch-header-cs-class"
      //                     data-class="bg-royal header-text-light"
      //                   ></div>
      //                   <div
      //                     className="swatch-holder bg-warm-flame switch-header-cs-class"
      //                     data-class="bg-warm-flame header-text-dark"
      //                   ></div>
      //                   <div
      //                     className="swatch-holder bg-night-fade switch-header-cs-class"
      //                     data-class="bg-night-fade header-text-dark"
      //                   ></div>
      //                   <div
      //                     className="swatch-holder bg-sunny-morning switch-header-cs-class"
      //                     data-class="bg-sunny-morning header-text-dark"
      //                   ></div>
      //                   <div
      //                     className="swatch-holder bg-tempting-azure switch-header-cs-class"
      //                     data-class="bg-tempting-azure header-text-dark"
      //                   ></div>
      //                   <div
      //                     className="swatch-holder bg-amy-crisp switch-header-cs-class"
      //                     data-class="bg-amy-crisp header-text-dark"
      //                   ></div>
      //                   <div
      //                     className="swatch-holder bg-heavy-rain switch-header-cs-class"
      //                     data-class="bg-heavy-rain header-text-dark"
      //                   ></div>
      //                   <div
      //                     className="swatch-holder bg-mean-fruit switch-header-cs-class"
      //                     data-class="bg-mean-fruit header-text-dark"
      //                   ></div>
      //                   <div
      //                     className="swatch-holder bg-malibu-beach switch-header-cs-class"
      //                     data-class="bg-malibu-beach header-text-light"
      //                   ></div>
      //                   <div
      //                     className="swatch-holder bg-deep-blue switch-header-cs-class"
      //                     data-class="bg-deep-blue header-text-dark"
      //                   ></div>
      //                   <div
      //                     className="swatch-holder bg-ripe-malin switch-header-cs-class"
      //                     data-class="bg-ripe-malin header-text-light"
      //                   ></div>
      //                   <div
      //                     className="swatch-holder bg-arielle-smile switch-header-cs-class"
      //                     data-class="bg-arielle-smile header-text-light"
      //                   ></div>
      //                   <div
      //                     className="swatch-holder bg-plum-plate switch-header-cs-class"
      //                     data-class="bg-plum-plate header-text-light"
      //                   ></div>
      //                   <div
      //                     className="swatch-holder bg-happy-fisher switch-header-cs-class"
      //                     data-class="bg-happy-fisher header-text-dark"
      //                   ></div>
      //                   <div
      //                     className="swatch-holder bg-happy-itmeo switch-header-cs-class"
      //                     data-class="bg-happy-itmeo header-text-light"
      //                   ></div>
      //                   <div
      //                     className="swatch-holder bg-mixed-hopes switch-header-cs-class"
      //                     data-class="bg-mixed-hopes header-text-light"
      //                   ></div>
      //                   <div
      //                     className="swatch-holder bg-strong-bliss switch-header-cs-class"
      //                     data-class="bg-strong-bliss header-text-light"
      //                   ></div>
      //                   <div
      //                     className="swatch-holder bg-grow-early switch-header-cs-class"
      //                     data-class="bg-grow-early header-text-light"
      //                   ></div>
      //                   <div
      //                     className="swatch-holder bg-love-kiss switch-header-cs-class"
      //                     data-class="bg-love-kiss header-text-light"
      //                   ></div>
      //                   <div
      //                     className="swatch-holder bg-premium-dark switch-header-cs-class"
      //                     data-class="bg-premium-dark header-text-light"
      //                   ></div>
      //                   <div
      //                     className="swatch-holder bg-happy-green switch-header-cs-class"
      //                     data-class="bg-happy-green header-text-light"
      //                   ></div>
      //                 </div>
      //               </li>
      //             </ul>
      //           </div>
      //           <h3 className="themeoptions-heading">
      //             <div>Sidebar Options</div>
      //             <button
      //               type="button"
      //               className="btn-pill btn-shadow btn-wide ml-auto btn btn-focus btn-sm switch-sidebar-cs-class"
      //               data-class=""
      //             >
      //               Restore Default
      //             </button>
      //           </h3>
      //           <div className="p-3">
      //             <ul className="list-group">
      //               <li className="list-group-item">
      //                 <h5 className="pb-2">Choose Color Scheme</h5>
      //                 <div className="theme-settings-swatches">
      //                   <div
      //                     className="swatch-holder bg-primary switch-sidebar-cs-class"
      //                     data-class="bg-primary sidebar-text-light"
      //                   ></div>
      //                   <div
      //                     className="swatch-holder bg-secondary switch-sidebar-cs-class"
      //                     data-class="bg-secondary sidebar-text-light"
      //                   ></div>
      //                   <div
      //                     className="swatch-holder bg-success switch-sidebar-cs-class"
      //                     data-class="bg-success sidebar-text-dark"
      //                   ></div>
      //                   <div
      //                     className="swatch-holder bg-info switch-sidebar-cs-class"
      //                     data-class="bg-info sidebar-text-dark"
      //                   ></div>
      //                   <div
      //                     className="swatch-holder bg-warning switch-sidebar-cs-class"
      //                     data-class="bg-warning sidebar-text-dark"
      //                   ></div>
      //                   <div
      //                     className="swatch-holder bg-danger switch-sidebar-cs-class"
      //                     data-class="bg-danger sidebar-text-light"
      //                   ></div>
      //                   <div
      //                     className="swatch-holder bg-light switch-sidebar-cs-class"
      //                     data-class="bg-light sidebar-text-dark"
      //                   ></div>
      //                   <div
      //                     className="swatch-holder bg-dark switch-sidebar-cs-class"
      //                     data-class="bg-dark sidebar-text-light"
      //                   ></div>
      //                   <div
      //                     className="swatch-holder bg-focus switch-sidebar-cs-class"
      //                     data-class="bg-focus sidebar-text-light"
      //                   ></div>
      //                   <div
      //                     className="swatch-holder bg-alternate switch-sidebar-cs-class"
      //                     data-class="bg-alternate sidebar-text-light"
      //                   ></div>
      //                   <div className="divider"></div>
      //                   <div
      //                     className="swatch-holder bg-vicious-stance switch-sidebar-cs-class"
      //                     data-class="bg-vicious-stance sidebar-text-light"
      //                   ></div>
      //                   <div
      //                     className="swatch-holder bg-midnight-bloom switch-sidebar-cs-class"
      //                     data-class="bg-midnight-bloom sidebar-text-light"
      //                   ></div>
      //                   <div
      //                     className="swatch-holder bg-night-sky switch-sidebar-cs-class"
      //                     data-class="bg-night-sky sidebar-text-light"
      //                   ></div>
      //                   <div
      //                     className="swatch-holder bg-slick-carbon switch-sidebar-cs-class"
      //                     data-class="bg-slick-carbon sidebar-text-light"
      //                   ></div>
      //                   <div
      //                     className="swatch-holder bg-asteroid switch-sidebar-cs-class"
      //                     data-class="bg-asteroid sidebar-text-light"
      //                   ></div>
      //                   <div
      //                     className="swatch-holder bg-royal switch-sidebar-cs-class"
      //                     data-class="bg-royal sidebar-text-light"
      //                   ></div>
      //                   <div
      //                     className="swatch-holder bg-warm-flame switch-sidebar-cs-class"
      //                     data-class="bg-warm-flame sidebar-text-dark"
      //                   ></div>
      //                   <div
      //                     className="swatch-holder bg-night-fade switch-sidebar-cs-class"
      //                     data-class="bg-night-fade sidebar-text-dark"
      //                   ></div>
      //                   <div
      //                     className="swatch-holder bg-sunny-morning switch-sidebar-cs-class"
      //                     data-class="bg-sunny-morning sidebar-text-dark"
      //                   ></div>
      //                   <div
      //                     className="swatch-holder bg-tempting-azure switch-sidebar-cs-class"
      //                     data-class="bg-tempting-azure sidebar-text-dark"
      //                   ></div>
      //                   <div
      //                     className="swatch-holder bg-amy-crisp switch-sidebar-cs-class"
      //                     data-class="bg-amy-crisp sidebar-text-dark"
      //                   ></div>
      //                   <div
      //                     className="swatch-holder bg-heavy-rain switch-sidebar-cs-class"
      //                     data-class="bg-heavy-rain sidebar-text-dark"
      //                   ></div>
      //                   <div
      //                     className="swatch-holder bg-mean-fruit switch-sidebar-cs-class"
      //                     data-class="bg-mean-fruit sidebar-text-dark"
      //                   ></div>
      //                   <div
      //                     className="swatch-holder bg-malibu-beach switch-sidebar-cs-class"
      //                     data-class="bg-malibu-beach sidebar-text-light"
      //                   ></div>
      //                   <div
      //                     className="swatch-holder bg-deep-blue switch-sidebar-cs-class"
      //                     data-class="bg-deep-blue sidebar-text-dark"
      //                   ></div>
      //                   <div
      //                     className="swatch-holder bg-ripe-malin switch-sidebar-cs-class"
      //                     data-class="bg-ripe-malin sidebar-text-light"
      //                   ></div>
      //                   <div
      //                     className="swatch-holder bg-arielle-smile switch-sidebar-cs-class"
      //                     data-class="bg-arielle-smile sidebar-text-light"
      //                   ></div>
      //                   <div
      //                     className="swatch-holder bg-plum-plate switch-sidebar-cs-class"
      //                     data-class="bg-plum-plate sidebar-text-light"
      //                   ></div>
      //                   <div
      //                     className="swatch-holder bg-happy-fisher switch-sidebar-cs-class"
      //                     data-class="bg-happy-fisher sidebar-text-dark"
      //                   ></div>
      //                   <div
      //                     className="swatch-holder bg-happy-itmeo switch-sidebar-cs-class"
      //                     data-class="bg-happy-itmeo sidebar-text-light"
      //                   ></div>
      //                   <div
      //                     className="swatch-holder bg-mixed-hopes switch-sidebar-cs-class"
      //                     data-class="bg-mixed-hopes sidebar-text-light"
      //                   ></div>
      //                   <div
      //                     className="swatch-holder bg-strong-bliss switch-sidebar-cs-class"
      //                     data-class="bg-strong-bliss sidebar-text-light"
      //                   ></div>
      //                   <div
      //                     className="swatch-holder bg-grow-early switch-sidebar-cs-class"
      //                     data-class="bg-grow-early sidebar-text-light"
      //                   ></div>
      //                   <div
      //                     className="swatch-holder bg-love-kiss switch-sidebar-cs-class"
      //                     data-class="bg-love-kiss sidebar-text-light"
      //                   ></div>
      //                   <div
      //                     className="swatch-holder bg-premium-dark switch-sidebar-cs-class"
      //                     data-class="bg-premium-dark sidebar-text-light"
      //                   ></div>
      //                   <div
      //                     className="swatch-holder bg-happy-green switch-sidebar-cs-class"
      //                     data-class="bg-happy-green sidebar-text-light"
      //                   ></div>
      //                 </div>
      //               </li>
      //             </ul>
      //           </div>
      //           <h3 className="themeoptions-heading">
      //             <div>Main Content Options</div>
      //             <button
      //               type="button"
      //               className="btn-pill btn-shadow btn-wide ml-auto active btn btn-focus btn-sm"
      //             >
      //               Restore Default
      //             </button>
      //           </h3>
      //           <div className="p-3">
      //             <ul className="list-group">
      //               <li className="list-group-item">
      //                 <h5 className="pb-2">Page Section Tabs</h5>
      //                 <div className="theme-settings-swatches">
      //                   <div role="group" className="mt-2 btn-group">
      //                     <button
      //                       type="button"
      //                       className="btn-wide btn-shadow btn-primary btn btn-secondary switch-theme-class"
      //                       data-class="body-tabs-line"
      //                     >
      //                       Line
      //                     </button>
      //                     <button
      //                       type="button"
      //                       className="btn-wide btn-shadow btn-primary active btn btn-secondary switch-theme-class"
      //                       data-class="body-tabs-shadow"
      //                     >
      //                       Shadow
      //                     </button>
      //                   </div>
      //                 </div>
      //               </li>
      //             </ul>
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      //   </div>{" "}
      */}
        <div className="app-main">
          <div className="app-sidebar sidebar-shadow">
            <div className="app-header__logo">
              <div className="logo-src" />
              <div className="header__pane ml-auto">
                <div>
                  <button
                    type="button"
                    className="hamburger close-sidebar-btn hamburger--elastic"
                    data-class="closed-sidebar"
                  >
                    <span className="hamburger-box">
                      <span className="hamburger-inner" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="app-header__mobile-menu">
              <div>
                <button
                  type="button"
                  className="hamburger hamburger--elastic mobile-toggle-nav"
                >
                  <span className="hamburger-box">
                    <span className="hamburger-inner" />
                  </span>
                </button>
              </div>
            </div>
            <div className="app-header__menu">
              <span>
                <button
                  type="button"
                  className="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav"
                >
                  <span className="btn-icon-wrapper">
                    <i className="fa fa-ellipsis-v fa-w-6" />
                  </span>
                </button>
              </span>
            </div>{" "}
            <div className="scrollbar-sidebar">
              <div className="app-sidebar__inner">
                <ul className="vertical-nav-menu">
                  <li className="app-sidebar__heading">Pages</li>
                  <li>
                    <a href="#" className="mm-active">
                      <i className="fas fa-file pe-7s-rocket" />
                      Dashboard
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="app-main__outer">
            <div className="app-main__inner">
              <div className="app-page-title">
                <div className="page-title-wrapper">
                  <div className="page-title-heading">
                    <div className="page-title-icon">
                      <img
                        src="https://www.kindpng.com/picc/m/752-7524489_data-analytics-logo-png-transparent-png.png"
                        alt=""
                        width="40px"
                      />
                    </div>
                    <div>
                      Analytics Dashboard
                      <div className="page-title-subheading">
                        This is dashboard for your all uploaded content and
                        analytics.
                      </div>
                    </div>
                  </div>
                  <div className="page-title-actions"></div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-xl-4">
                  <div className="card mb-3 widget-content bg-midnight-bloom">
                    <div className="widget-content-wrapper text-white">
                      <div className="widget-content-left">
                        <div className="widget-heading">
                          Total Points (this month)
                        </div>
                        <div className="widget-subheading">
                          Total upvotes - Total downvots
                        </div>
                      </div>
                      <div className="widget-content-right">
                        <div className="widget-numbers text-white">
                          <span>1896</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-4">
                  <div className="card mb-3 widget-content bg-arielle-smile">
                    <div className="widget-content-wrapper text-white">
                      <div className="widget-content-left">
                        <div className="widget-heading">Content</div>
                        <div className="widget-subheading">
                          Total number of content you uploaded
                        </div>
                      </div>
                      <div className="widget-content-right">
                        <div className="widget-numbers text-white">
                          <span> 16</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-4">
                  <div className="card mb-3 widget-content bg-grow-early">
                    <div className="widget-content-wrapper text-white">
                      <div className="widget-content-left">
                        <div className="widget-heading">This month earning</div>
                        <div className="widget-subheading">
                          How much you earned this month so far
                        </div>
                      </div>
                      <div className="widget-content-right">
                        <div className="widget-numbers text-white">
                          <span>₹78</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-4">
                  <div className="card mb-3 widget-content bg-grow-early">
                    <div className="widget-content-wrapper text-white">
                      <div className="widget-content-left">
                        <div className="widget-heading">
                          Expected earning per point
                        </div>
                        <div className="widget-subheading">
                          Earning per point for this month
                        </div>
                      </div>
                      <div className="widget-content-right">
                        <div className="widget-numbers text-white">
                          <span>0.72</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-4">
                  <div className="card mb-3 widget-content bg-midnight-bloom">
                    <div className="widget-content-wrapper text-white">
                      <div className="widget-content-left">
                        <div className="widget-heading">Total Balance</div>
                        <div className="widget-subheading">
                          Money that available for withdraw
                        </div>
                      </div>
                      <div className="widget-content-right">
                        <div className="widget-numbers text-white">
                          <span>₹5798</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-4">
                  <div className="card mb-3 widget-content bg-arielle-smile">
                    <div className="widget-content-wrapper text-white">
                      <div className="widget-content-left">
                        <div className="widget-heading">Last month earning</div>
                        <div className="widget-subheading">
                          Total rupees that you earned last month
                        </div>
                      </div>
                      <div className="widget-content-right">
                        <div className="widget-numbers text-white">
                          <span> ₹652</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="marginbetween">.</div>
              <div className="row">
                <div className="col-md-12 col-lg-6">
                  <div className="mb-3 card">
                    <div className="card-header-tab card-header-tab-animation card-header">
                      <div className="card-header-title">
                        <i className="header-icon lnr-apartment icon-gradient bg-love-kiss">
                          {" "}
                        </i>
                        Points Report
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="tab-content">
                        <div
                          className="tab-pane fade show active"
                          id="tabs-eg-77"
                        >
                          <div className="card mb-3 widget-chart widget-chart2 text-left w-100">
                            <div className="widget-chat-wrapper-outer">
                              <div className="widget-chart-wrapper widget-chart-wrapper-lg opacity-10 m-0">
                                <canvas id="canvas" />
                              </div>
                            </div>
                          </div>
                          <h6 className="text-muted text-uppercase font-size-md opacity-5 font-weight-normal" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-lg-6">
                  <div className="mb-3 card">
                    <div className="card-header-tab card-header">
                      <div className="card-header-title">
                        <i className="header-icon lnr-rocket icon-gradient bg-tempting-azure">
                          {" "}
                        </i>
                        Reports
                      </div>
                    </div>
                    <div className="tab-content">
                      <div className="tab-pane fade active show" id="tab-eg-55">
                        <div className="widget-chart p-3">
                          <div style={{ height: 350 }}>
                            <canvas id="line-chart" />
                          </div>
                        </div>
                        <div className="pt-2 card-body" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form_wrapper">
                <div className="form_container">
                  <div className="title_container">
                    <h2
                      style={{
                        "font-weight": "500",
                        "letter-spacing": "1px",
                        "font-family":
                          "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
                      }}
                    >
                      Withdraw Form
                    </h2>
                  </div>
                  <div className="row clearfix">
                    <form>
                      <div className="input_field">
                        {" "}
                        <span>
                          <i aria-hidden="true" className="fa fa-envelope" />
                        </span>
                        <input
                          type="email"
                          name="email"
                          placeholder="Email"
                          required=""
                          style={{ "font-size": "15px" }}
                        />
                      </div>
                      <div className="input_field">
                        {" "}
                        <span>
                          <i aria-hidden="true" className="fa fa-lock" />
                        </span>
                        <input
                          type="password"
                          name="password"
                          placeholder="Password"
                          required=""
                          style={{ "font-size": "15px" }}
                        />
                      </div>
                      <div className="input_field">
                        {" "}
                        <span>
                          <i
                            aria-hidden="true"
                            className="fas fa-credit-card"
                          />
                        </span>
                        <input
                          type="text"
                          name="upi"
                          placeholder="UPI Id"
                          required=""
                          style={{ "font-size": "15px" }}
                        />
                      </div>
                      <div className="row clearfix">
                        <div className="col_half">
                          <div className="input_field">
                            {" "}
                            <span>
                              <i
                                aria-hidden="true"
                                className="fas fa-dollar-sign"
                              />
                            </span>
                            <input
                              type="text"
                              name="name"
                              placeholder="Amount"
                              style={{ "font-size": "15px" }}
                            />
                          </div>
                        </div>
                        <div className="col_half">
                          <div className="input_field">
                            {" "}
                            <span>
                              <i
                                aria-hidden="true"
                                className="fas fa-dollar-sign"
                              />
                            </span>
                            <input
                              type="text"
                              name="name"
                              placeholder="Confirm amount"
                              required=""
                              style={{ "font-size": "15px" }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="column clearfix">
                        <div className="checkbox_option">
                          <input type="checkbox" id="cb1" />
                          <label
                            htmlFor="cb1"
                            style={{
                              color: "black",
                              "font-weight": "500",
                              "font-size": "15px",
                              paddingRight: "18px",
                            }}
                          >
                            I agree with terms and conditions
                          </label>
                        </div>
                        <div className="checkbox_option">
                          <input type="checkbox" id="cb2" />
                          <label
                            htmlFor="cb2"
                            style={{
                              color: "black",
                              "font-weight": "500",
                              "font-size": "15px",
                              paddingRight: "32px",
                            }}
                          >
                            I want to receive the newsletter
                          </label>
                        </div>
                      </div>
                      <input
                        className="button"
                        style={{ "padding-bottom": "40px" }}
                        type="submit"
                        defaultValue="Register"
                      />
                    </form>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="main-card mb-3 card">
                    <div className="card-header">
                      Withdraw Status
                      <div className="btn-actions-pane-right"></div>
                    </div>
                    <div className="table-responsive">
                      <table className="align-middle mb-0 table table-borderless table-striped table-hover">
                        <thead>
                          <tr>
                            <th className="text-center">#</th>
                            <th>Date and Time</th>
                            <th className="text-center">Amount</th>
                            <th className="text-center">Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="text-center text-muted">#345</td>
                            <td>
                              <div className="widget-content p-0">
                                <div className="widget-content-wrapper">
                                  <div className="widget-content-left mr-3">
                                    <div className="widget-content-left">
                                      <img
                                        width={40}
                                        className="rounded-circle"
                                        src="assets/images/avatars/4.jpg"
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                  <div className="widget-content-left flex2">
                                    <div className="widget-heading">
                                      John Doe
                                    </div>
                                    <div className="widget-subheading opacity-7">
                                      Web Developer
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="text-center">Madrid</td>
                            <td className="text-center">
                              <div className="badge badge-warning">Pending</div>
                            </td>
                          </tr>
                          <tr>
                            <td className="text-center text-muted">#347</td>
                            <td>
                              <div className="widget-content p-0">
                                <div className="widget-content-wrapper">
                                  <div className="widget-content-left mr-3">
                                    <div className="widget-content-left">
                                      <img
                                        width={40}
                                        className="rounded-circle"
                                        src="assets/images/avatars/3.jpg"
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                  <div className="widget-content-left flex2">
                                    <div className="widget-heading">
                                      Ruben Tillman
                                    </div>
                                    <div className="widget-subheading opacity-7">
                                      Etiam sit amet orci eget
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="text-center">Berlin</td>
                            <td className="text-center">
                              <div className="badge badge-success">
                                Completed
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="text-center text-muted">#321</td>
                            <td>
                              <div className="widget-content p-0">
                                <div className="widget-content-wrapper">
                                  <div className="widget-content-left mr-3">
                                    <div className="widget-content-left">
                                      <img
                                        width={40}
                                        className="rounded-circle"
                                        src="assets/images/avatars/2.jpg"
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                  <div className="widget-content-left flex2">
                                    <div className="widget-heading">
                                      Elliot Huber
                                    </div>
                                    <div className="widget-subheading opacity-7">
                                      Lorem ipsum dolor sic
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="text-center">London</td>
                            <td className="text-center">
                              <div className="badge badge-danger">
                                In Progress
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="text-center text-muted">#55</td>
                            <td>
                              <div className="widget-content p-0">
                                <div className="widget-content-wrapper">
                                  <div className="widget-content-left mr-3">
                                    <div className="widget-content-left">
                                      <img
                                        width={40}
                                        className="rounded-circle"
                                        src="assets/images/avatars/1.jpg"
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                  <div className="widget-content-left flex2">
                                    <div className="widget-heading">
                                      Vinnie Wagstaff
                                    </div>
                                    <div className="widget-subheading opacity-7">
                                      UI Designer
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="text-center">Amsterdam</td>
                            <td className="text-center">
                              <div className="badge badge-info">On Hold</div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="marginbetwee">.</div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}

export default Profile;
