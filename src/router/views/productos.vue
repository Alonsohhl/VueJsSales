<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'

export default {
  page: {
    title: 'Productos',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: { Layout, PageHeader },
  data() {
    return {
      title: 'Productos',
      items: [
        {
          text: 'Inicio',
          href: '/',
        },
        {
          text: 'Productos',
          active: true,
        },
      ],
    }
  },
}
</script>

<template>
  <Layout>
    <PageHeader
      :title="title"
      :items="items"
    />

    <!-- <div class="row">
      <div class="col-md-12">
        <b-card>
          This is dashboard page
        </b-card>
      </div>
    </div> -->
    <div class="topbar-menu">
                <div class="container-fluid">
                    <div id="navigation" class="active">
                        <!-- Navigation Menu-->
                        <ul class="navigation-menu in">

                            <li class="has-submenu">
                                <a href="#">
                                    <i class="fe-airplay"></i>Dashboards <div class="arrow-down"></div></a>
                                <ul class="submenu">
                                    <li>
                                        <a href="index.html">Dashboard 1</a>
                                    </li>
                                    <li>
                                        <a href="dashboard-2.html">Dashboard 2</a>
                                    </li>
                                    <li>
                                        <a href="dashboard-3.html">Dashboard 3</a>
                                    </li>
                                    <li>
                                        <a href="dashboard-4.html">Dashboard 4</a>
                                    </li>
                                </ul>
                            </li>

                            <li class="has-submenu">
                                <a href="#">
                                    <i class="fe-grid"></i>Apps <div class="arrow-down"></div></a>
                                <ul class="submenu">
                                    <li class="has-submenu">
                                        <a href="#">CRM <div class="arrow-down"></div></a>
                                        <ul class="submenu">
                                            <li>
                                                <a href="crm-dashboard.html">Dashboard</a>
                                            </li>
                                            <li>
                                                <a href="crm-contacts.html">Contacts</a>
                                            </li>
                                            <li>
                                                <a href="crm-opportunities.html">Opportunities</a>
                                            </li>
                                            <li>
                                                <a href="crm-leads.html">Leads</a>
                                            </li>
                                            <li>
                                                <a href="crm-customers.html">Customers</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="has-submenu">
                                        <a href="#">eCommerce <div class="arrow-down"></div></a>
                                        <ul class="submenu">
                                            <li>
                                                <a href="ecommerce-dashboard.html">Dashboard</a>
                                            </li>
                                            <li>
                                                <a href="ecommerce-products.html">Products</a>
                                            </li>
                                            <li>
                                                <a href="ecommerce-prduct-detail.html">Product Detail</a>
                                            </li>
                                            <li>
                                                <a href="ecommerce-product-edit.html">Product Edit</a>
                                            </li>
                                            <li>
                                                <a href="ecommerce-orders.html">Orders</a>
                                            </li>
                                            <li>
                                                <a href="ecommerce-sellers.html">Sellers</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="has-submenu">
                                        <a href="#">Email <div class="arrow-down"></div></a>
                                        <ul class="submenu">
                                            <li>
                                                <a href="email-inbox.html">Inbox</a>
                                            </li>
                                            <li>
                                                <a href="email-read.html">Read Email</a>
                                            </li>
                                            <li>
                                                <a href="email-compose.html">Compose Email</a>
                                            </li>
                                            <li>
                                                <a href="email-templates.html">Email Templates</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="apps-kanbanboard.html">Kanban Board</a>
                                    </li>
                                    <li>
                                        <a href="apps-calendar.html">Calendar</a>
                                    </li>
                                    <li>
                                        <a href="apps-contacts.html">Contacts</a>
                                    </li>
                                    <li>
                                        <a href="apps-projects.html">Projects</a>
                                    </li>
                                    <li>
                                        <a href="apps-tickets.html">Tickets</a>
                                    </li>
                                    <li>
                                        <a href="apps-companies.html">Companies</a>
                                    </li>
                                </ul>
                            </li>

                            <li class="has-submenu">
                                <a href="#"> <i class="fe-briefcase"></i>Elements <div class="arrow-down"></div></a>
                                <ul class="submenu megamenu">
                                    <li>
                                        <ul>
                                            <li>
                                                <a href="ui-buttons.html">Buttons</a>
                                            </li>
                                            <li>
                                                <a href="ui-cards.html">Cards</a>
                                            </li>
                                            <li>
                                                <a href="ui-portlets.html">Portlets</a>
                                            </li>
                                            <li>
                                                <a href="ui-tabs-accordions.html">Tabs &amp; Accordions</a>
                                            </li>
                                            <li>
                                                <a href="ui-modals.html">Modals</a>
                                            </li>
                                            <li>
                                                <a href="ui-progress.html">Progress</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <ul>
                                            <li>
                                                <a href="ui-notifications.html">Notifications</a>
                                            </li>
                                            <li>
                                                <a href="ui-images.html">Images</a>
                                            </li>
                                            <li>
                                                <a href="ui-carousel.html">Carousel</a>
                                            </li>
                                            <li>
                                                <a href="ui-video.html">Embed Video</a>
                                            </li>
                                            <li>
                                                <a href="ui-dropdowns.html">Dropdowns</a>
                                            </li>
                                            <li>
                                                <a href="ui-spinners.html">Spinners</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <ul>
                                            <li>
                                                <a href="ui-ribbons.html">Ribbons</a>
                                            </li>
                                            <li>
                                                <a href="ui-tooltips-popovers.html">Tooltips &amp; Popovers</a>
                                            </li>
                                            <li>
                                                <a href="ui-general.html">General UI</a>
                                            </li>
                                            <li>
                                                <a href="ui-typography.html">Typography</a>
                                            </li>
                                            <li>
                                                <a href="ui-grid.html">Grid</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>

                            <li class="has-submenu">
                                <a href="#"> <i class="fe-cpu"></i>Admin UI <div class="arrow-down"></div></a>
                                <ul class="submenu">
                                    <li>
                                        <a href="admin-widgets.html">Widgets</a>
                                    </li>
                                    <li>
                                        <a href="admin-nestable.html">Nestable List</a>
                                    </li>
                                    <li>
                                        <a href="admin-range-slider.html">Range Slider</a>
                                    </li>
                                    <li>
                                        <a href="admin-animation.html">Animation</a>
                                    </li>
                                    <li>
                                        <a href="admin-sweet-alert.html">Sweet Alert</a>
                                    </li>
                                    <li>
                                        <a href="admin-tour.html">Tour Page</a>
                                    </li>
                                    <li>
                                        <a href="admin-loading-buttons.html">Loading Buttons</a>
                                    </li>
                                </ul>
                            </li>

                            <li class="has-submenu">
                                <a href="#">
                                    <i class="fe-layers"></i>Components <div class="arrow-down"></div></a>
                                <ul class="submenu">
                                    <li class="has-submenu">
                                        <a href="#">Forms <div class="arrow-down"></div></a>
                                        <ul class="submenu">
                                            <li>
                                                <a href="forms-elements.html">General Elements</a>
                                            </li>
                                            <li>
                                                <a href="forms-advanced.html">Advanced</a>
                                            </li>
                                            <li>
                                                <a href="forms-validation.html">Validation</a>
                                            </li>
                                            <li>
                                                <a href="forms-pickers.html">Pickers</a>
                                            </li>
                                            <li>
                                                <a href="forms-wizard.html">Wizard</a>
                                            </li>
                                            <li>
                                                <a href="forms-masks.html">Masks</a>
                                            </li>
                                            <li>
                                                <a href="forms-summernote.html">Summernote</a>
                                            </li>
                                            <li>
                                                <a href="forms-quilljs.html">Quilljs Editor</a>
                                            </li>
                                            <li>
                                                <a href="forms-file-uploads.html">File Uploads</a>
                                            </li>
                                            <li>
                                                <a href="forms-x-editable.html">X Editable</a>
                                            </li>
                                            <li>
                                                <a href="forms-image-crop.html">Image Crop</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="has-submenu">
                                        <a href="#">Tables <div class="arrow-down"></div></a>
                                        <ul class="submenu">
                                            <li>
                                                <a href="tables-basic.html">Basic Tables</a>
                                            </li>
                                            <li>
                                                <a href="tables-datatables.html">Data Tables</a>
                                            </li>
                                            <li>
                                                <a href="tables-editable.html">Editable Tables</a>
                                            </li>
                                            <li>
                                                <a href="tables-responsive.html">Responsive Tables</a>
                                            </li>
                                            <li>
                                                <a href="tables-footables.html">FooTable</a>
                                            </li>
                                            <li>
                                                <a href="tables-bootstrap.html">Bootstrap Tables</a>
                                            </li>
                                            <li>
                                                <a href="tables-tablesaw.html">Tablesaw Tables</a>
                                            </li>
                                            <li>
                                                <a href="tables-jsgrid.html">JsGrid Tables</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="has-submenu">
                                        <a href="#">Charts <div class="arrow-down"></div></a>
                                        <ul class="submenu">
                                            <li>
                                                <a href="charts-flot.html">Flot Charts</a>
                                            </li>
                                            <li>
                                                <a href="charts-morris.html">Morris Charts</a>
                                            </li>
                                            <li>
                                                <a href="charts-chartjs.html">Chartjs Charts</a>
                                            </li>
                                            <li>
                                                <a href="charts-peity.html">Peity Charts</a>
                                            </li>
                                            <li>
                                                <a href="charts-chartist.html">Chartist Charts</a>
                                            </li>
                                            <li>
                                                <a href="charts-c3.html">C3 Charts</a>
                                            </li>
                                            <li>
                                                <a href="charts-sparklines.html">Sparklines Charts</a>
                                            </li>
                                            <li>
                                                <a href="charts-knob.html">Jquery Knob Charts</a>
                                            </li>
                                            <li>
                                                <a href="charts-ricksaw.html">Ricksaw Charts</a>
                                            </li>
                                            <li>
                                                <a href="charts-just-gage.html">JustGage Charts</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="has-submenu">
                                        <a href="#">Icons <div class="arrow-down"></div></a>
                                        <ul class="submenu">
                                            <li>
                                                <a href="icons-feather.html">Feather Icons</a>
                                            </li>
                                            <li>
                                                <a href="icons-mdi.html">Material Design Icons</a>
                                            </li>
                                            <li>
                                                <a href="icons-dripicons.html">Dripicons</a>
                                            </li>
                                            <li>
                                                <a href="icons-font-awesome.html">Font Awesome</a>
                                            </li>
                                            <li>
                                                <a href="icons-themify.html">Themify</a>
                                            </li>
                                            <li>
                                                <a href="icons-simple-line.html">Simple Line</a>
                                            </li>
                                            <li>
                                                <a href="icons-weather.html">Weather</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="has-submenu">
                                        <a href="#">Maps <div class="arrow-down"></div></a>
                                        <ul class="submenu">
                                            <li>
                                                <a href="maps-google.html">Google Maps</a>
                                            </li>
                                            <li>
                                                <a href="maps-vector.html">Vector Maps</a>
                                            </li>
                                            <li>
                                                <a href="maps-mapael.html">Mapael Maps</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>

                            <li class="has-submenu last-elements">
                                <a href="#"> <i class="fe-package"></i>Pages <div class="arrow-down"></div></a>
                                <ul class="submenu megamenu">
                                    <li>
                                        <ul>
                                            <li>
                                                <a href="pages-starter.html">Starter</a>
                                            </li>
                                            <li>
                                                <a href="pages-login.html">Log In</a>
                                            </li>
                                            <li>
                                                <a href="pages-register.html">Register</a>
                                            </li>
                                            <li>
                                                <a href="pages-signin-signup.html">Signin - Signup</a>
                                            </li>
                                            <li>
                                                <a href="pages-recoverpw.html">Recover Password</a>
                                            </li>
                                            <li>
                                                <a href="pages-lock-screen.html">Lock Screen</a>
                                            </li>
                                            <li>
                                                <a href="pages-logout.html">Logout</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <ul>
                                            <li>
                                                <a href="pages-confirm-mail.html">Confirm Mail</a>
                                            </li>
                                            <li>
                                                <a href="pages-404.html">Error 404</a>
                                            </li>
                                            <li>
                                                <a href="pages-404-alt.html">Error 404-alt</a>
                                            </li>
                                            <li>
                                                <a href="pages-500.html">Error 500</a>
                                            </li>
                                            <li>
                                                <a href="extras-profile.html">Profile</a>
                                            </li>
                                            <li>
                                                <a href="extras-timeline.html">Timeline</a>
                                            </li>
                                            <li>
                                                <a href="extras-sitemap.html">Sitemap</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <ul>
                                            <li>
                                                <a href="extras-invoice.html">Invoice</a>
                                            </li>
                                            <li>
                                                <a href="extras-faqs.html">FAQs</a>
                                            </li>
                                            <li>
                                                <a href="extras-search-results.html">Search Results</a>
                                            </li>
                                            <li>
                                                <a href="extras-pricing.html">Pricing</a>
                                            </li>
                                            <li>
                                                <a href="extras-maintenance.html">Maintenance</a>
                                            </li>
                                            <li>
                                                <a href="extras-coming-soon.html">Coming Soon</a>
                                            </li>
                                            <li>
                                                <a href="extras-gallery.html">Gallery</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>

                            <li class="has-submenu active last-elements">
                                <a href="#" class="active"> <i class="fe-sidebar"></i>Layouts <div class="arrow-down"></div></a>
                                <ul class="submenu in">
                                    <li>
                                        <a href="layouts-topbar-dark.html">Topbar Dark</a>
                                    </li>
                                    <li class="active">
                                        <a href="layouts-menubar-light.html" class="active">Menubar Light</a>
                                    </li>
                                    <li>
                                        <a href="layouts-center-menu.html">Center Menu</a>
                                    </li>
                                    <li>
                                        <a href="layouts-topbar-gradient.html">Gradient Topbar</a>
                                    </li>
                                    <li>
                                        <a href="layouts-menu-drop-dark.html">Menu Drop Dark</a>
                                    </li>
                                    <li>
                                        <a href="layouts-preloader.html">Preloader</a>
                                    </li>
                                    <li>
                                        <a href="layouts-normal-header.html">Unsticky Header</a>
                                    </li>
                                    <li>
                                        <a href="layouts-boxed.html">Boxed</a>
                                    </li>
                                </ul>
                            </li>

                        </ul>
                        <!-- End navigation menu -->

                        <div class="clearfix"></div>
                    </div>
                    <!-- end #navigation -->
                </div>
                <!-- end container -->
            </div>
<div class="row">
                    <div class="col-12">
                        <div class="card-box">
                            <h4 class="header-title">Filtering</h4>
                            <p class="sub-header">
                                include filtering in your FooTable.
                            </p>

                            <div class="mb-2">
                                <div class="row">
                                    <div class="col-12 text-sm-center form-inline">
                                        <div class="form-group mr-2">
                                            <select id="demo-foo-filter-status" class="custom-select custom-select-sm">
                                                <option value="">Show all</option>
                                                <option value="active">Active</option>
                                                <option value="disabled">Disabled</option>
                                                <option value="suspended">Suspended</option>
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <input id="demo-foo-search" type="text" placeholder="Search" class="form-control form-control-sm" autocomplete="on">
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="table-responsive">
                                <table id="demo-foo-filtering" class="table table-bordered toggle-circle mb-0 default footable-loaded footable" data-page-size="7">
                                    <thead>
                                    <tr>
                                        <th data-toggle="true" class="footable-visible footable-first-column footable-sortable">First Name<span class="footable-sort-indicator"></span></th>
                                        <th class="footable-visible footable-sortable">Last Name<span class="footable-sort-indicator"></span></th>
                                        <th data-hide="phone" class="footable-visible footable-sortable">Job Title<span class="footable-sort-indicator"></span></th>
                                        <th data-hide="phone, tablet" class="footable-visible footable-sortable">DOB<span class="footable-sort-indicator"></span></th>
                                        <th data-hide="phone, tablet" class="footable-visible footable-last-column footable-sortable">Status<span class="footable-sort-indicator"></span></th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr class="footable-even" style="">
                                        <td class="footable-visible footable-first-column"><span class="footable-toggle"></span>Isidra</td>
                                        <td class="footable-visible">Boudreaux</td>
                                        <td class="footable-visible">Traffic Court Referee</td>
                                        <td class="footable-visible">22 Jun 1972</td>
                                        <td class="footable-visible footable-last-column"><span class="badge label-table badge-success">Active</span></td>
                                    </tr>
                                    <tr class="footable-odd" style="">
                                        <td class="footable-visible footable-first-column"><span class="footable-toggle"></span>Shona</td>
                                        <td class="footable-visible">Woldt</td>
                                        <td class="footable-visible">Airline Transport Pilot</td>
                                        <td class="footable-visible">3 Oct 1981</td>
                                        <td class="footable-visible footable-last-column"><span class="badge label-table badge-secondary">Disabled</span></td>
                                    </tr>
                                    <tr class="footable-even" style="">
                                        <td class="footable-visible footable-first-column"><span class="footable-toggle"></span>Granville</td>
                                        <td class="footable-visible">Leonardo</td>
                                        <td class="footable-visible">Business Services Sales Representative</td>
                                        <td class="footable-visible">19 Apr 1969</td>
                                        <td class="footable-visible footable-last-column"><span class="badge label-table badge-danger">Suspended</span></td>
                                    </tr>
                                    <tr class="footable-odd" style="">
                                        <td class="footable-visible footable-first-column"><span class="footable-toggle"></span>Easer</td>
                                        <td class="footable-visible">Dragoo</td>
                                        <td class="footable-visible">Drywall Stripper</td>
                                        <td class="footable-visible">13 Dec 1977</td>
                                        <td class="footable-visible footable-last-column"><span class="badge label-table badge-success">Active</span></td>
                                    </tr>
                                    <tr class="footable-even" style="">
                                        <td class="footable-visible footable-first-column"><span class="footable-toggle"></span>Maple</td>
                                        <td class="footable-visible">Halladay</td>
                                        <td class="footable-visible">Aviation Tactical Readiness Officer</td>
                                        <td class="footable-visible">30 Dec 1991</td>
                                        <td class="footable-visible footable-last-column"><span class="badge label-table badge-danger">Suspended</span></td>
                                    </tr>
                                    <tr class="footable-odd" style="">
                                        <td class="footable-visible footable-first-column"><span class="footable-toggle"></span>Maxine</td>
                                        <td class="footable-visible"><a href="#">Woldt</a></td>
                                        <td class="footable-visible"><a href="#">Business Services Sales Representative</a></td>
                                        <td class="footable-visible">17 Oct 1987</td>
                                        <td class="footable-visible footable-last-column"><span class="badge label-table badge-secondary">Disabled</span></td>
                                    </tr>
                                    <tr class="footable-even" style="">
                                        <td class="footable-visible footable-first-column"><span class="footable-toggle"></span>Lorraine</td>
                                        <td class="footable-visible">Mcgaughy</td>
                                        <td class="footable-visible">Hemodialysis Technician</td>
                                        <td class="footable-visible">11 Nov 1983</td>
                                        <td class="footable-visible footable-last-column"><span class="badge label-table badge-secondary">Disabled</span></td>
                                    </tr>
                                    <tr class="footable-odd" style="display: none;">
                                        <td class="footable-visible footable-first-column"><span class="footable-toggle"></span>Lizzee</td>
                                        <td class="footable-visible"><a href="#">Goodlow</a></td>
                                        <td class="footable-visible">Technical Services Librarian</td>
                                        <td class="footable-visible">1 Nov 1961</td>
                                        <td class="footable-visible footable-last-column"><span class="badge label-table badge-danger">Suspended</span></td>
                                    </tr>
                                    <tr class="footable-even" style="display: none;">
                                        <td class="footable-visible footable-first-column"><span class="footable-toggle"></span>Judi</td>
                                        <td class="footable-visible">Badgett</td>
                                        <td class="footable-visible">Electrical Lineworker</td>
                                        <td class="footable-visible">23 Jun 1981</td>
                                        <td class="footable-visible footable-last-column"><span class="badge label-table badge-success">Active</span></td>
                                    </tr>
                                    <tr class="footable-odd" style="display: none;">
                                        <td class="footable-visible footable-first-column"><span class="footable-toggle"></span>Lauri</td>
                                        <td class="footable-visible">Hyland</td>
                                        <td class="footable-visible">Blackjack Supervisor</td>
                                        <td class="footable-visible">15 Nov 1985</td>
                                        <td class="footable-visible footable-last-column"><span class="badge label-table badge-danger">Suspended</span></td>
                                    </tr>
                                    <tr class="footable-even" style="display: none;">
                                        <td class="footable-visible footable-first-column"><span class="footable-toggle"></span>Isidra</td>
                                        <td class="footable-visible">Boudreaux</td>
                                        <td class="footable-visible">Traffic Court Referee</td>
                                        <td class="footable-visible">22 Jun 1972</td>
                                        <td class="footable-visible footable-last-column"><span class="badge label-table badge-success">Active</span></td>
                                    </tr>
                                    <tr class="footable-odd" style="display: none;">
                                        <td class="footable-visible footable-first-column"><span class="footable-toggle"></span>Shona</td>
                                        <td class="footable-visible">Woldt</td>
                                        <td class="footable-visible">Airline Transport Pilot</td>
                                        <td class="footable-visible">3 Oct 1981</td>
                                        <td class="footable-visible footable-last-column"><span class="badge label-table badge-secondary">Disabled</span></td>
                                    </tr>
                                    <tr class="footable-even" style="display: none;">
                                        <td class="footable-visible footable-first-column"><span class="footable-toggle"></span>Granville</td>
                                        <td class="footable-visible">Leonardo</td>
                                        <td class="footable-visible">Business Services Sales Representative</td>
                                        <td class="footable-visible">19 Apr 1969</td>
                                        <td class="footable-visible footable-last-column"><span class="badge label-table badge-danger">Suspended</span></td>
                                    </tr>
                                    <tr class="footable-odd" style="display: none;">
                                        <td class="footable-visible footable-first-column"><span class="footable-toggle"></span>Easer</td>
                                        <td class="footable-visible">Dragoo</td>
                                        <td class="footable-visible">Drywall Stripper</td>
                                        <td class="footable-visible">13 Dec 1977</td>
                                        <td class="footable-visible footable-last-column"><span class="badge label-table badge-success">Active</span></td>
                                    </tr>
                                    <tr class="footable-even" style="display: none;">
                                        <td class="footable-visible footable-first-column"><span class="footable-toggle"></span>Maple</td>
                                        <td class="footable-visible">Halladay</td>
                                        <td class="footable-visible">Aviation Tactical Readiness Officer</td>
                                        <td class="footable-visible">30 Dec 1991</td>
                                        <td class="footable-visible footable-last-column"><span class="badge label-table badge-danger">Suspended</span></td>
                                    </tr>
                                    <tr class="footable-odd" style="display: none;">
                                        <td class="footable-visible footable-first-column"><span class="footable-toggle"></span>Maxine</td>
                                        <td class="footable-visible"><a href="#">Woldt</a></td>
                                        <td class="footable-visible"><a href="#">Business Services Sales Representative</a></td>
                                        <td class="footable-visible">17 Oct 1987</td>
                                        <td class="footable-visible footable-last-column"><span class="badge label-table badge-secondary">Disabled</span></td>
                                    </tr>
                                    <tr class="footable-even" style="display: none;">
                                        <td class="footable-visible footable-first-column"><span class="footable-toggle"></span>Lorraine</td>
                                        <td class="footable-visible">Mcgaughy</td>
                                        <td class="footable-visible">Hemodialysis Technician</td>
                                        <td class="footable-visible">11 Nov 1983</td>
                                        <td class="footable-visible footable-last-column"><span class="badge label-table badge-secondary">Disabled</span></td>
                                    </tr>
                                    <tr class="footable-odd" style="display: none;">
                                        <td class="footable-visible footable-first-column"><span class="footable-toggle"></span>Lizzee</td>
                                        <td class="footable-visible"><a href="#">Goodlow</a></td>
                                        <td class="footable-visible">Technical Services Librarian</td>
                                        <td class="footable-visible">1 Nov 1961</td>
                                        <td class="footable-visible footable-last-column"><span class="badge label-table badge-danger">Suspended</span></td>
                                    </tr>
                                    <tr class="footable-even" style="display: none;">
                                        <td class="footable-visible footable-first-column"><span class="footable-toggle"></span>Judi</td>
                                        <td class="footable-visible">Badgett</td>
                                        <td class="footable-visible">Electrical Lineworker</td>
                                        <td class="footable-visible">23 Jun 1981</td>
                                        <td class="footable-visible footable-last-column"><span class="badge label-table badge-success">Active</span></td>
                                    </tr>
                                    <tr class="footable-odd" style="display: none;">
                                        <td class="footable-visible footable-first-column"><span class="footable-toggle"></span>Lauri</td>
                                        <td class="footable-visible">Hyland</td>
                                        <td class="footable-visible">Blackjack Supervisor</td>
                                        <td class="footable-visible">15 Nov 1985</td>
                                        <td class="footable-visible footable-last-column"><span class="badge label-table badge-danger">Suspended</span></td>
                                    </tr>
                                    <tr class="footable-even" style="display: none;">
                                        <td class="footable-visible footable-first-column"><span class="footable-toggle"></span>Isidra</td>
                                        <td class="footable-visible">Boudreaux</td>
                                        <td class="footable-visible">Traffic Court Referee</td>
                                        <td class="footable-visible">22 Jun 1972</td>
                                        <td class="footable-visible footable-last-column"><span class="badge label-table badge-success">Active</span></td>
                                    </tr>
                                    <tr class="footable-odd" style="display: none;">
                                        <td class="footable-visible footable-first-column"><span class="footable-toggle"></span>Shona</td>
                                        <td class="footable-visible">Woldt</td>
                                        <td class="footable-visible">Airline Transport Pilot</td>
                                        <td class="footable-visible">3 Oct 1981</td>
                                        <td class="footable-visible footable-last-column"><span class="badge label-table badge-secondary">Disabled</span></td>
                                    </tr>
                                    <tr class="footable-even" style="display: none;">
                                        <td class="footable-visible footable-first-column"><span class="footable-toggle"></span>Granville</td>
                                        <td class="footable-visible">Leonardo</td>
                                        <td class="footable-visible">Business Services Sales Representative</td>
                                        <td class="footable-visible">19 Apr 1969</td>
                                        <td class="footable-visible footable-last-column"><span class="badge label-table badge-danger">Suspended</span></td>
                                    </tr>
                                    <tr class="footable-odd" style="display: none;">
                                        <td class="footable-visible footable-first-column"><span class="footable-toggle"></span>Easer</td>
                                        <td class="footable-visible">Dragoo</td>
                                        <td class="footable-visible">Drywall Stripper</td>
                                        <td class="footable-visible">13 Dec 1977</td>
                                        <td class="footable-visible footable-last-column"><span class="badge label-table badge-success">Active</span></td>
                                    </tr>
                                    <tr class="footable-even" style="display: none;">
                                        <td class="footable-visible footable-first-column"><span class="footable-toggle"></span>Maple</td>
                                        <td class="footable-visible">Halladay</td>
                                        <td class="footable-visible">Aviation Tactical Readiness Officer</td>
                                        <td class="footable-visible">30 Dec 1991</td>
                                        <td class="footable-visible footable-last-column"><span class="badge label-table badge-danger">Suspended</span></td>
                                    </tr>
                                    <tr class="footable-odd" style="display: none;">
                                        <td class="footable-visible footable-first-column"><span class="footable-toggle"></span>Maxine</td>
                                        <td class="footable-visible"><a href="#">Woldt</a></td>
                                        <td class="footable-visible"><a href="#">Business Services Sales Representative</a></td>
                                        <td class="footable-visible">17 Oct 1987</td>
                                        <td class="footable-visible footable-last-column"><span class="badge label-table badge-secondary">Disabled</span></td>
                                    </tr>
                                    <tr class="footable-even" style="display: none;">
                                        <td class="footable-visible footable-first-column"><span class="footable-toggle"></span>Lorraine</td>
                                        <td class="footable-visible">Mcgaughy</td>
                                        <td class="footable-visible">Hemodialysis Technician</td>
                                        <td class="footable-visible">11 Nov 1983</td>
                                        <td class="footable-visible footable-last-column"><span class="badge label-table badge-secondary">Disabled</span></td>
                                    </tr>
                                    <tr class="footable-odd" style="display: none;">
                                        <td class="footable-visible footable-first-column"><span class="footable-toggle"></span>Lizzee</td>
                                        <td class="footable-visible"><a href="#">Goodlow</a></td>
                                        <td class="footable-visible">Technical Services Librarian</td>
                                        <td class="footable-visible">1 Nov 1961</td>
                                        <td class="footable-visible footable-last-column"><span class="badge label-table badge-danger">Suspended</span></td>
                                    </tr>
                                    <tr class="footable-even" style="display: none;">
                                        <td class="footable-visible footable-first-column"><span class="footable-toggle"></span>Judi</td>
                                        <td class="footable-visible">Badgett</td>
                                        <td class="footable-visible">Electrical Lineworker</td>
                                        <td class="footable-visible">23 Jun 1981</td>
                                        <td class="footable-visible footable-last-column"><span class="badge label-table badge-success">Active</span></td>
                                    </tr>
                                    <tr class="footable-odd" style="display: none;">
                                        <td class="footable-visible footable-first-column"><span class="footable-toggle"></span>Lauri</td>
                                        <td class="footable-visible">Hyland</td>
                                        <td class="footable-visible">Blackjack Supervisor</td>
                                        <td class="footable-visible">15 Nov 1985</td>
                                        <td class="footable-visible footable-last-column"><span class="badge label-table badge-danger">Suspended</span></td>
                                    </tr>
                                    </tbody>
                                    <tfoot>
                                    <tr class="active">
                                        <td colspan="5" class="footable-visible">
                                            <div class="text-right">
                                                <ul class="pagination pagination-rounded justify-content-end footable-pagination m-t-10 mb-0"><li class="footable-page-arrow disabled"><a data-page="first" href="#first">«</a></li><li class="footable-page-arrow disabled"><a data-page="prev" href="#prev">‹</a></li><li class="footable-page active"><a data-page="0" href="#">1</a></li><li class="footable-page"><a data-page="1" href="#">2</a></li><li class="footable-page"><a data-page="2" href="#">3</a></li><li class="footable-page"><a data-page="3" href="#">4</a></li><li class="footable-page"><a data-page="4" href="#">5</a></li><li class="footable-page-arrow"><a data-page="next" href="#next">›</a></li><li class="footable-page-arrow"><a data-page="last" href="#last">»</a></li></ul>
                                            </div>
                                        </td>
                                    </tr>
                                    </tfoot>
                                </table>
                            </div> <!-- end .table-responsive-->
                        </div> <!-- end card-box -->
                    </div> <!-- end col -->
                </div>
    <div class="row">
                    <div class="col-xl-6">
                        <div class="card-box">
                            <h4 class="header-title mb-3">Transaction Historyx</h4>

                            <div class="table-responsive">
                                <table class="table table-centered table-hover mb-0">
                                    <thead>
                                        <tr>
                                            <th class="border-top-0">Name</th>
                                            <th class="border-top-0">Card</th>
                                            <th class="border-top-0">Date</th>
                                            <th class="border-top-0">Amount</th>
                                            <th class="border-top-0">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <img src="assets/images/users/user-2.jpg" alt="user-pic" class="rounded-circle avatar-sm bx-shadow-lg">
                                                <span class="ml-2">Imelda J. Stanberry</span>
                                            </td>
                                            <td>
                                                <img src="assets/images/cards/visa.png" alt="user-card" height="24">
                                                <span class="ml-2">**** 3256</span>
                                            </td>
                                            <td>27.03.2018</td>
                                            <td>$345.98</td>
                                            <td><span class="badge badge-pill badge-danger">Failed</span></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img src="assets/images/users/user-3.jpg" alt="user-pic" class="rounded-circle avatar-sm bx-shadow-lg">
                                                <span class="ml-2">Francisca S. Lobb</span>
                                            </td>
                                            <td>
                                                <img src="assets/images/cards/master.png" alt="user-card" height="24">
                                                <span class="ml-2">**** 8451</span>
                                            </td>
                                            <td>28.03.2018</td>
                                            <td>$1,250</td>
                                            <td><span class="badge badge-pill badge-success">Paid</span></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img src="assets/images/users/user-1.jpg" alt="user-pic" class="rounded-circle avatar-sm bx-shadow-lg">
                                                <span class="ml-2">James A. Wert</span>
                                            </td>
                                            <td>
                                                <img src="assets/images/cards/amazon.png" alt="user-card" height="24">
                                                <span class="ml-2">**** 2258</span>
                                            </td>
                                            <td>28.03.2018</td>
                                            <td>$145</td>
                                            <td><span class="badge badge-pill badge-success">Paid</span></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img src="assets/images/users/user-4.jpg" alt="user-pic" class="rounded-circle avatar-sm bx-shadow-lg">
                                                <span class="ml-2">Dolores J. Pooley</span>
                                            </td>
                                            <td>
                                                <img src="assets/images/cards/american-express.png" alt="user-card" height="24">
                                                <span class="ml-2">**** 6950</span>
                                            </td>
                                            <td>29.03.2018</td>
                                            <td>$2,005.89</td>
                                            <td><span class="badge badge-pill badge-danger">Failed</span></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img src="assets/images/users/user-5.jpg" alt="user-pic" class="rounded-circle avatar-sm bx-shadow-lg">
                                                <span class="ml-2">Karen I. McCluskey</span>
                                            </td>
                                            <td>
                                                <img src="assets/images/cards/discover.png" alt="user-card" height="24">
                                                <span class="ml-2">**** 0021</span>
                                            </td>
                                            <td>31.03.2018</td>
                                            <td>$24.95</td>
                                            <td><span class="badge badge-pill badge-success">Paid</span></td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div> <!-- end table-responsive -->

                        </div> <!-- end card-box-->
                    </div> <!-- end col-->
                    <div class="col-xl-6">
                        <div class="card-box">
                            <h4 class="header-title mb-3">Recent Products</h4>

                            <div class="table-responsive">
                                <table class="table table-centered table-hover mb-0">
                                    <thead>
                                        <tr>
                                            <th class="border-top-0">Product</th>
                                            <th class="border-top-0">Category</th>
                                            <th class="border-top-0">Added Date</th>
                                            <th class="border-top-0">Amount</th>
                                            <th class="border-top-0">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <img src="assets/images/products/product-1.jpg" alt="product-pic" height="36">
                                                <span class="ml-2">Adirondack Chair</span>
                                            </td>
                                            <td>
                                                Dining Chairs
                                            </td>
                                            <td>27.03.2018</td>
                                            <td>$345.98</td>
                                            <td><span class="badge bg-soft-success text-success">Active</span></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img src="assets/images/products/product-2.jpg" alt="product-pic" height="36">
                                                <span class="ml-2">Biblio Plastic Armchair</span>
                                            </td>
                                            <td>
                                                Baby Chairs
                                            </td>
                                            <td>28.03.2018</td>
                                            <td>$1,250</td>
                                            <td><span class="badge bg-soft-success text-success">Active</span></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img src="assets/images/products/product-3.jpg" alt="product-pic" height="36">
                                                <span class="ml-2">Amazing Modern Chair</span>
                                            </td>
                                            <td>
                                                Plastic Armchair
                                            </td>
                                            <td>28.03.2018</td>
                                            <td>$145</td>
                                            <td><span class="badge bg-soft-danger text-danger">Deactive</span></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img src="assets/images/products/product-4.jpg" alt="product-pic" height="36">
                                                <span class="ml-2">Designer Awesome Chair</span>
                                            </td>
                                            <td>
                                                Wing Chairs
                                            </td>
                                            <td>29.03.2018</td>
                                            <td>$2,005.89</td>
                                            <td><span class="badge bg-soft-success text-success">Active</span></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img src="assets/images/products/product-5.jpg" alt="product-pic" height="36">
                                                <span class="ml-2">The butterfly chair</span>
                                            </td>
                                            <td>
                                                Plastic Armchair
                                            </td>
                                            <td>31.03.2018</td>
                                            <td>$24.95</td>
                                            <td><span class="badge bg-soft-success text-success">Active</span></td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div> <!-- end table-responsive -->
                        </div> <!-- end card-box-->
                    </div> <!-- end col-->
                </div>
  </Layout>
</template>
