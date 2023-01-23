import React from 'react'
import './Dashboard.css'
import courseicon from '../../assets/courses.svg'
import classicon from '../../assets/classes.svg'
import arrowdown from '../../assets/arrow-down.svg'
import sorticon from '../../assets/sort.svg'
import staricon from '../../assets/favourite.svg'
import preview from '../../assets/preview.svg'
import calendar from '../../assets/managecourse.svg'
import gradeicon from '../../assets/gradesubmissions.svg'
import charticon from '../../assets/reports.svg'
import { data } from './data'
import { ShortenText } from '../../utils/ShortenText'

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
                {data.map((card) => (
                    <div id={card.id} className='card'>
                        <div className={card.expire !== "" && `c-expire`}>
                            <p>
                                {card.expire}
                            </p>
                        </div>
                        <div className='card-details'>
                            <div className='card-img'>
                                <img src={card.image} alt="class1img" width={`70%`} />
                            </div>
                            <div className='card-info'>
                                <div className='card-name'>
                                    <p>
                                        {card.name.length >= 55 ? ShortenText(card.name) : card.name}
                                    </p>
                                    <img src={staricon} alt="staricon" />
                                </div>
                                <div className='card-subject'>
                                    <p>
                                        {card.subject} <span style={{ color: 'rgba(31, 122, 84, 1)' }}>{card.subjectub}</span>
                                    </p>
                                </div>
                                <div className='card-chapters'>
                                    <p>
                                        {card.units !== 0 && card.lessons !== 0 && card.topics !== 0 &&
                                            <>
                                                <span style={{ color: 'rgba(34, 34, 34, 1)' }}>{card.units}</span> Units  <span style={{ color: 'rgba(34, 34, 34, 1)' }}>{card.lessons}</span> Lessons  <span style={{ color: 'rgba(34, 34, 34, 1)' }}>{card.topics}</span> Topics
                                            </>
                                        }
                                    </p>
                                </div>
                                <div className='card-dd'>
                                    <p>
                                        {card.teacher}
                                    </p>
                                    <img src={arrowdown} alt="arrowdown" />
                                </div>
                                <div className='card-date'>
                                    <p>
                                        {card.students !== 0 && <>{card.students} Students</>} {card.students !== 0 && card.date !== "" && <> | </>} {card.date !== "" && <>{card.date}</>}
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
                ))}
            </div>
        </div>
    )
}

export default Dashboard