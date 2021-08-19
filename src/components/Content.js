import React from 'react'
import Input from './Input'
import TaskField from './TaskField'
import { useState } from 'react'

const Content = () => {

    const [Tasks] = useState([
        {
            id : '1',
            year: '2021',
            month: 'july',
            day: '29',
            text: 'Do your job!!!',
            reminder: false
        },
        {
            id: '2',
            year: '2021',
            month: 'august',
            day: '15',
            text: 'Clean your room!!!',
            reminder: true
        },
        {
            id: '3',
            year: '2021',
            month: 'august',
            day: '18',
            text: 'Sleep!!!',
            reminder: true
        }
    ])
    const [year, setYear] = useState('')
    const [month, setMonth] = useState('')

    const UpdateYear = (year) => {
        setYear(year)
    }

    const UpdateMonth = (month) => {
        setMonth(month)
    }

    const getWantedTasks = (month, year) => {
        let selectedTasks = []
        Tasks.forEach((task) => {
            if(task.year === year && task.month === month.toLowerCase()) {
                selectedTasks.push(task)
            }
        })
        return selectedTasks
    }

    const getDaysInMonth = (month, year) => {
        let month_number = 0
        switch(month) {
            case 'January':
                month_number = 1;
                break;
            case 'February':
                month_number = 2;
                break;
            case 'March':
                month_number = 3;
                break;
            case 'April':
                month_number = 4;
                break;
            case 'May':
                month_number = 5;
                break;
            case 'June':
                month_number = 6;
                break;
            case 'July':
                month_number = 7;
                break;
            case 'August':
                month_number = 8;
                break;
            case 'September':
                month_number = 9;
                break;
            case 'October':
                month_number = 10;
                break;
            case 'November':
                month_number = 11;
                break;
            case 'December':
                month_number = 12;
                break;
            default:
                break;

        }
        return new Date(month_number, year, 0).getDate()
    }

    return (
        <div className='container'>
            <form className='date-picker-div'>
                <Input className='' type='text' name='year' onChange={UpdateYear}/>
                <Input className='' type='text' name='month' onChange={UpdateMonth}/>
            </form>

            <div className='tasks-div'>
                {
                    (year === '' || month === '')
                    ? <> </>
                    : <TaskField days={getDaysInMonth(month, year)} getWantedTasks={getWantedTasks} getDaysInMonth={getDaysInMonth} month={month} year={year}/>
                }
            </div>
        </div>
    )
}

export default Content
