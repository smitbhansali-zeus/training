import React from 'react'
import './Dashboard.css'
import courseicon from '../../assets/courses.svg'
import classicon from '../../assets/classes.svg'
import arrowdown from '../../assets/arrow-down.svg'
import sorticon from '../../assets/sort.svg'
import class1img from '../../assets/imageMask-1.svg'
import class2img from '../../assets/imageMask-2.svg'
import class3img from '../../assets/imageMask.svg'
import class4img from '../../assets/imageMask-3.svg'
import staricon from '../../assets/favourite.svg'
import preview from '../../assets/preview.svg'
import calendar from '../../assets/managecourse.svg'
import gradeicon from '../../assets/gradesubmissions.svg'
import charticon from '../../assets/reports.svg'


const Dashboard = () => {
    return (
        <div className='db-body'>
            <div className='cc'>
                <div className='course'>
                    <img src={courseicon} alt="courseicon" />
                    <p className='coursenumber'> <b>4</b> Courses</p>
                </div>
                <div className='class'>
                    <img src={classicon} alt="classicon" />
                    <p className='classnumber'> <b>4</b> Classes</p>
                </div>
            </div>
            <div className='sortcc'>
                <div className='totcc'>
                    <p>
                        Showing 4 of 4 courses
                    </p>
                </div>
                <div className='sort'>
                    <p className='sortby'>
                        Sort By:
                    </p>
                    <div className='sortbycc'>
                        <p>
                            Course Name
                        </p>
                        <img src={arrowdown} alt="arrowdown" />
                    </div>
                    <img src={sorticon} alt="sorticon" style={{ marginLeft: '20px' }} />
                </div>
            </div>
            <div className='cardscc'>
                <div className='card'>
                    <div className='card-details'>
                        <div className='card-img'>
                            <img src={class1img} alt="class1img" width={`70%`} />
                        </div>
                        <div className='card-info'>
                            <div className='card-name'>
                                <p>
                                    Acceleration
                                </p>
                                <img src={staricon} alt="staricon" />
                            </div>
                            <div className='card-subject'>
                                <p>
                                    Physics | Grade 7 <span style={{ color: 'rgba(31, 122, 84, 1)' }}>+2</span>
                                </p>
                            </div>
                            <div className='card-chapters'>
                                <p>
                                    <span style={{ color: 'rgba(34, 34, 34, 1)' }}>4</span> Units  <span style={{ color: 'rgba(34, 34, 34, 1)' }}>18</span> Lessons  <span style={{ color: 'rgba(34, 34, 34, 1)' }}>24</span> Topics
                                </p>
                            </div>
                            <div className='card-dd'>
                                <p>
                                    Mr. Frank's Class B
                                </p>
                                <img src={arrowdown} alt="arrowdown" />
                            </div>
                            <div className='card-date'>
                                <p>
                                    50 Students | 21-Jan-2020 - 21-Aug-2020
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='card-links'>
                        <img src={preview} alt="preview" />
                        <img src={calendar} alt="calendar" />
                        <img src={gradeicon} alt="gradeicon" />
                        <img src={charticon} alt="charticon" />
                    </div>
                </div>
                <div className='card'>
                    <div className='card-details'>
                        <div className='card-img'>
                            <img src={class2img} alt="class2img" width={`70%`} />
                        </div>
                        <div className='card-info'>
                            <div className='card-name'>
                                <p>
                                    Displacement, Velocity and Speed
                                </p>
                                <img src={staricon} alt="staricon" />
                            </div>
                            <div className='card-subject'>
                                <p>
                                    Physics 2 | Grade 6 <span style={{ color: 'rgba(31, 122, 84, 1)' }}>+3</span>
                                </p>
                            </div>
                            <div className='card-chapters'>
                                <p>
                                    <span style={{ color: 'rgba(34, 34, 34, 1)' }}>2</span> Units  <span style={{ color: 'rgba(34, 34, 34, 1)' }}>15</span> Lessons  <span style={{ color: 'rgba(34, 34, 34, 1)' }}>20</span> Topics
                                </p>
                            </div>
                            <div className='card-dd'>
                                <p style={{ opacity: '40%' }}>
                                    No Classes
                                </p>
                                <img src={arrowdown} alt="arrowdown" />
                            </div>
                            <div className='card-date'>
                                <p>

                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='card-links'>
                        <img src={preview} alt="preview" />
                        <img src={calendar} alt="calendar" style={{ opacity: '0.4' }} />
                        <img src={gradeicon} alt="gradeicon" style={{ opacity: '0.4' }} />
                        <img src={charticon} alt="charticon" />
                    </div>
                </div>
                <div className='card'>
                    <div className='card-details'>
                        <div className='card-img'>
                            <img src={class3img} alt="class3img" width={`70%`} />
                        </div>
                        <div className='card-info'>
                            <div className='card-name'>
                                <p>
                                    Introduction to Biology: Micro organisms and how they affec...
                                </p>
                                <img src={staricon} alt="staricon" />
                            </div>
                            <div className='card-subject'>
                                <p>
                                    Biology | Grade 4 <span style={{ color: 'rgba(31, 122, 84, 1)' }}>+1</span>
                                </p>
                            </div>
                            <div className='card-chapters'>
                                <p>
                                    <span style={{ color: 'rgba(34, 34, 34, 1)' }}>5</span> Units  <span style={{ color: 'rgba(34, 34, 34, 1)' }}>16</span> Lessons  <span style={{ color: 'rgba(34, 34, 34, 1)' }}>22</span> Topics
                                </p>
                            </div>
                            <div className='card-dd'>
                                <p>
                                    All Classes
                                </p>
                                <img src={arrowdown} alt="arrowdown" />
                            </div>
                            <div className='card-date'>
                                <p>
                                    300 Students
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='card-links'>
                        <img src={preview} alt="preview" />
                        <img src={calendar} alt="calendar" style={{ opacity: '0.4' }} />
                        <img src={gradeicon} alt="gradeicon" style={{ opacity: '0.4' }} />
                        <img src={charticon} alt="charticon" />
                    </div>
                </div>
                <div className='card'>
                    <div className='card-details'>
                        <div className='card-img'>
                            <img src={class4img} alt="class4img" width={`70%`} />
                        </div>
                        <div className='card-info'>
                            <div className='card-name'>
                                <p>
                                    Introduction to High School Mathematics
                                </p>
                                <img src={staricon} alt="staricon" style={{ filter: 'grayscale(100%)' }} />
                            </div>
                            <div className='card-subject'>
                                <p>
                                    Mathematics | Grade 8 <span style={{ color: 'rgba(31, 122, 84, 1)' }}>+3</span>
                                </p>
                            </div>
                            <div className='card-dd'>
                                <p>
                                    Mr. Frank's Class A
                                </p>
                                <img src={arrowdown} alt="arrowdown" />
                            </div>
                            <div className='card-date'>
                                <p>
                                    44 Students | 14-Oct-2019 - 20-Oct-2020
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='card-links'>
                        <img src={preview} alt="preview" />
                        <img src={calendar} alt="calendar" />
                        <img src={gradeicon} alt="gradeicon" />
                        <img src={charticon} alt="charticon" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard