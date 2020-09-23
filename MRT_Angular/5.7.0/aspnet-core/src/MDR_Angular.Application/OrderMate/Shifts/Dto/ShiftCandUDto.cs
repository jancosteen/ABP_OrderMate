﻿using Abp.AutoMapper;
using Abp.Domain.Entities;
using MDR_Angular.OrderMate.EmployeeShifts;
using MDR_Angular.OrderMate.ShiftStatusses;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace MDR_Angular.OrderMate.Shifts
{
    [AutoMapFrom(typeof(Shift))]
    [AutoMapTo(typeof(Shift))]
    public class ShiftCandUDto
    {
        //public int ShiftId { get; set; }
        public DateTime ShiftStartDateTime { get; set; }
        public DateTime ShiftEndDateTime { get; set; }
        public int ShiftCapacity { get; set; }
        public string ShiftName { get; set; }
        public int? ShiftStatusIdFk { get; set; }

        
    }
}