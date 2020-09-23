using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using System;
using System.Collections.Generic;
using System.Text;

namespace MDR_Angular.OrderMate.EmployeeShifts.Dto
{
    [AutoMapFrom(typeof(EmployeeShift))]
    [AutoMapTo(typeof(EmployeeShift))]
    public class EmployeeShiftDto: EntityDto<int>
    {
        public int ShiftIdFk { get; set; }
        public int EmployeeIdFk { get; set; }
    }
}
