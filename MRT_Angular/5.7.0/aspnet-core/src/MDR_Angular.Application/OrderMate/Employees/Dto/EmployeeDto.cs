﻿using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using System;
using System.Collections.Generic;
using System.Text;

namespace MDR_Angular.OrderMate.Employees.Dto
{
    [AutoMapFrom(typeof(Employee))]
    [AutoMapTo(typeof(Employee))]
    public class EmployeeDto:EntityDto<int>
    {
        public string EmployeeIdNumber { get; set; }
        public int? RestaurantIdFk { get; set; }
    }
}
