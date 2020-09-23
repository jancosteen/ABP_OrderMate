﻿using Abp.Domain.Entities;
using MDR_Angular.OrderMate.Employees;
using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace MDR_Angular.OrderMate.AttendanceSheets
{
    public class AttendanceSheet:Entity<int>
    {
        //public int AttendanceSheetId { get; set; }
        public DateTime ClockInDateTime { get; set; }
        public DateTime ClockOutDateTime { get; set; }
        public int? EmployeeIdFk { get; set; }

        [ForeignKey("EmployeeIdFk")]
        public virtual Employee EmployeeIdFkNavigation { get; set; }
    }
}
