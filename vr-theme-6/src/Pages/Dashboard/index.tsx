import { Helmet } from "react-helmet";
import Header from "../../Components/Header";
import Sidebar from "../../Components/Sidebar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProgressBar from "react-bootstrap/ProgressBar";
import CountUp from "react-countup";
import Table from "react-bootstrap/Table";
import Dropdown from "react-bootstrap/Dropdown";
import {
  barChartIcon,
  keyIcon,
  moneyCoinIcon,
  threeDots,
  user1,
  user2,
  user3,
  user4,
  walletIcon,
  worldMap,
} from "../../assets/images";
import WeeklyReport from "../../Components/Charts/weeklyReport";
import { useRef } from 'react';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Dashboard: React.FC = () => {

  //GSAP Animation
  const progressTimelineMain = useRef(null);
  useEffect(() => {
    let statisticsSvg = gsap.timeline();
    statisticsSvg.fromTo(".statistic-card .img-block img", { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 1 });

    let pageText = gsap.timeline();
    pageText.fromTo(".page-title", { y: "-40px", opacity: 0 }, { y: 0, opacity: 1, duration: 1 });
    pageText.fromTo(".statistic-card p", { y: "40px", opacity: 0 }, { y: 0, opacity: 1, stagger: 0.3 });
    pageText.fromTo("h5", { y: "40px", opacity: 0 }, { y: 0, opacity: 1, stagger: 0.3 });

    gsap.fromTo(".sidebar .nav-item a", {
      opacity: 0,
      x: -40,
    }, {
      opacity: 1,
      x: 0,
      stagger: 0.3,
    }
    );

    // Sales by Locations Card Progress Bar Animation
    const progressTimeline = progressTimelineMain.current;
    let progressBarAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: progressTimeline,
        start: "top center",
        end: "+=600",
      }
    });
    // progressBarAnimation.fromTo(".MuiLinearProgress-bar", { width: 0 }, { width: "100%", duration: 2 });
  });

  return (
    <>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <div className="wrapper">
        <Header />
        <Sidebar />
        <div className="main-content">
          <h3 className="page-title">Dashboard</h3>
          <Row>
            <Col xs={12} sm={6} xl={3}>
              <a href="#" title="Property Sold" className="statistic-card blue">
                <div>
                  <h3><CountUp end={6387} /></h3>
                  <p>Property Sold</p>
                </div>
                <div className="img-block">
                  <img src={barChartIcon} alt="Property Sold" />
                </div>
              </a>
            </Col>
            <Col xs={12} sm={6} xl={3}>
              <a href="#" title="Income" className="statistic-card pink">
                <div>
                  <h3><CountUp end={9712} prefix="$" separator="," /></h3>
                  <p>Income</p>
                </div>
                <div className="img-block">
                  <img src={walletIcon} alt="Income" />
                </div>
              </a>
            </Col>
            <Col xs={12} sm={6} xl={3}>
              <a href="#" title="Expense" className="statistic-card orange">
                <div>
                  <h3><CountUp end={965} /></h3>
                  <p>Expense</p>
                </div>
                <div className="img-block">
                  <img src={moneyCoinIcon} alt="Expense" />
                </div>
              </a>
            </Col>
            <Col xs={12} sm={6} xl={3}>
              <a
                href="#"
                title="Property Rented"
                className="statistic-card red"
              >
                <div>
                  <h3><CountUp end={8723} prefix="$" separator="," /></h3>
                  <p>Property Rented</p>
                </div>
                <div className="img-block">
                  <img src={keyIcon} alt="Property Rented" />
                </div>
              </a>
            </Col>
            <Col xs={12} xl={7} className="mb-3 mb-sm-4">
              <div className="custom-card weekly-report-card">
                <div className="card-heading">
                  <h5 className="me-2">Weekly Report</h5>
                  <div className="graph-notation">
                    <p>This week</p>
                    <p>last week</p>
                  </div>
                </div>
                <WeeklyReport />
              </div>
            </Col>
            <Col xs={12} xl={5} className="mb-3 mb-sm-4">
              <div className="custom-card transaction-card">
                <div className="card-heading">
                  <h5 className="me-2">Transaction</h5>
                  <a href="#" title="View more" className="header-link">
                    View more
                  </a>
                </div>
                <ul>
                  <li>
                    <a href="#" title="Transaction-info">
                      <img
                        src={user1}
                        alt="User Name"
                        className="user-profile"
                      />
                      <span className="user-details">
                        <p className="user-name">Devon Lane</p>
                        <p className="transaction-date">March 23, 2013</p>
                      </span>
                      <span className="transaction-amount success">
                        +<CountUp end={600} prefix="$" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Transaction-info">
                      <img
                        src={user2}
                        alt="User Name"
                        className="user-profile"
                      />
                      <span className="user-details">
                        <p className="user-name">Bessie Cooper</p>
                        <p className="transaction-date">May 31, 2015</p>
                      </span>
                      <span className="transaction-amount danger">
                        -<CountUp end={400} prefix="$" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Transaction-info">
                      <img
                        src={user3}
                        alt="User Name"
                        className="user-profile"
                      />
                      <span className="user-details">
                        <p className="user-name">Guy Hawkins</p>
                        <p className="transaction-date">October 31, 2017</p>
                      </span>
                      <span className="transaction-amount success">
                        +<CountUp end={200} prefix="$" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Transaction-info">
                      <img
                        src={user4}
                        alt="User Name"
                        className="user-profile"
                      />
                      <span className="user-details">
                        <p className="user-name">Kathryn Murphy</p>
                        <p className="transaction-date">December 2, 2018</p>
                      </span>
                      <span className="transaction-amount success">
                        +<CountUp end={450} prefix="$" />
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col xs={12} xl={7} className="mb-3 mb-sm-4 mb-xl-0">
              <div className="custom-card">
                <div className="card-heading">
                  <h5 className="me-2">Table</h5>
                  <a href="#" title="View more" className="header-link">
                    View more
                  </a>
                </div>
                <Table responsive>
                  <thead>
                    <tr>
                      <th>SKU</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th className="text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>50364</td>
                      <td>Floyd Miles</td>
                      <td>tparisian@gmail.com</td>
                      <td align="center">
                        <Dropdown className="action-menu">
                          <Dropdown.Toggle>
                            <img src={threeDots} alt="Action" />
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">
                              Action
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                              Another action
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                              Something else
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </td>
                    </tr>
                    <tr>
                      <td>50364</td>
                      <td>Jane Cooper</td>
                      <td>altenwerth.ansel@sawayn.com</td>
                      <td align="center">
                        <Dropdown className="action-menu">
                          <Dropdown.Toggle>
                            <img src={threeDots} alt="Action" />
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">
                              Action
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                              Another action
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                              Something else
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </td>
                    </tr>
                    <tr>
                      <td>50364</td>
                      <td>Esther Howard</td>
                      <td>rebeka.jacobi@carroll.org</td>
                      <td align="center">
                        <Dropdown className="action-menu">
                          <Dropdown.Toggle>
                            <img src={threeDots} alt="Action" />
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">
                              Action
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                              Another action
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                              Something else
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </td>
                    </tr>
                    <tr>
                      <td>50364</td>
                      <td>Jane Cooperr</td>
                      <td>eramy.bogan@gmail.com</td>
                      <td align="center">
                        <Dropdown className="action-menu">
                          <Dropdown.Toggle>
                            <img src={threeDots} alt="Action" />
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">
                              Action
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                              Another action
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                              Something else
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </td>
                    </tr>
                    <tr>
                      <td>50364</td>
                      <td>Leslie Alexander</td>
                      <td>jeramy.bogan@gmail.com</td>
                      <td align="center">
                        <Dropdown className="action-menu">
                          <Dropdown.Toggle>
                            <img src={threeDots} alt="Action" />
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">
                              Action
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                              Another action
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                              Something else
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </td>
                    </tr>
                    <tr>
                      <td>50364</td>
                      <td>Jane Cooper</td>
                      <td>trantow.crystal@zulauf.com</td>
                      <td align="center">
                        <Dropdown className="action-menu">
                          <Dropdown.Toggle>
                            <img src={threeDots} alt="Action" />
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">
                              Action
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                              Another action
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                              Something else
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </td>
                    </tr>
                    <tr>
                      <td>50364</td>
                      <td>Robert Fox</td>
                      <td>magdalen39@langosh.com</td>
                      <td align="center">
                        <Dropdown className="action-menu">
                          <Dropdown.Toggle>
                            <img src={threeDots} alt="Action" />
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">
                              Action
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                              Another action
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                              Something else
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </td>
                    </tr>
                    <tr>
                      <td>50364</td>
                      <td>Jane Cooper</td>
                      <td>roman.russel@nikolaus.biz</td>
                      <td align="center">
                        <Dropdown className="action-menu">
                          <Dropdown.Toggle>
                            <img src={threeDots} alt="Action" />
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">
                              Action
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                              Another action
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                              Something else
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </td>
                    </tr>
                    <tr>
                      <td>50364</td>
                      <td>Jacob Jones</td>
                      <td>rebeka.jacobi@carroll.org</td>
                      <td align="center">
                        <Dropdown className="action-menu">
                          <Dropdown.Toggle>
                            <img src={threeDots} alt="Action" />
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">
                              Action
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                              Another action
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                              Something else
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </td>
                    </tr>
                    <tr>
                      <td>50364</td>
                      <td>Jane Cooper</td>
                      <td>tevin44@gmail.com</td>
                      <td align="center">
                        <Dropdown className="action-menu">
                          <Dropdown.Toggle>
                            <img src={threeDots} alt="Action" />
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">
                              Action
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                              Another action
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                              Something else
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Col>
            <Col xs={12} xl={5}>
              <div className="custom-card" ref={progressTimelineMain}>
                <div className="card-heading">
                  <h5 className="me-2">Sales by Locations</h5>
                  <a href="#" title="View more" className="header-link">
                    View more
                  </a>
                </div>
                <img src={worldMap} alt="Map" className="img-fluid" />
                <ul className="sales-progress">
                  <li>
                    <span className="city-info">
                      <p>USA</p>
                      <CountUp
                        end={75}
                        suffix="%"
                        duration={1}
                        enableScrollSpy
                        scrollSpyOnce
                      >
                        {({ countUpRef, start }) => (
                          <>
                            <span ref={countUpRef} />
                          </>
                        )}
                      </CountUp>
                    </span>
                    <ProgressBar now={75} />
                  </li>
                  <li>
                    <span className="city-info">
                      <p>India</p>
                      <CountUp
                        end={86}
                        suffix="%"
                        enableScrollSpy
                        scrollSpyOnce
                      >
                        {({ countUpRef, start }) => (
                          <>
                            <span ref={countUpRef} />
                          </>
                        )}
                      </CountUp>
                    </span>
                    <ProgressBar now={86} />
                  </li>
                  <li>
                    <span className="city-info">
                      <p>Russia</p>
                      <CountUp
                        end={62}
                        suffix="%"
                        enableScrollSpy
                        scrollSpyOnce
                      >
                        {({ countUpRef, start }) => (
                          <>
                            <span ref={countUpRef} />
                          </>
                        )}
                      </CountUp>
                    </span>
                    <ProgressBar now={62} />
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
