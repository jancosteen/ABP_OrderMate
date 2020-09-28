using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using Abp.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace MDR_Angular.OrderMate.LayoutTypes.Dto
{
    [AutoMapFrom(typeof(LayoutType))]
    [AutoMapTo(typeof(LayoutType))]
    public class LayoutTypeDto:FullAuditedEntityDto<int>
    {
        public string LayoutType1 { get; set; }

    }
}
