using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using Abp.Domain.Entities;
using MDR_Angular.OrderMate.Shifts;
using System;
using System.Collections.Generic;
using System.Text;

namespace MDR_Angular.OrderMate.ShiftStatusses
{
    [AutoMapFrom(typeof(ShiftStatus))]
    [AutoMapTo(typeof(ShiftStatus))]
    public class ShiftStatusDto: EntityDto<int>
    {
        //public int ShiftStatusId { get; set; }
        public string ShiftStatus1 { get; set; }

    }
}
