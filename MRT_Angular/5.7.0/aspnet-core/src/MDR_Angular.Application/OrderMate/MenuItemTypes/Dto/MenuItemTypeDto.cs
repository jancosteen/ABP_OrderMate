using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using System;
using System.Collections.Generic;
using System.Text;

namespace MDR_Angular.OrderMate.MenuItemTypes.Dto
{
    [AutoMapFrom(typeof(MenuItemType))]
    [AutoMapTo(typeof(MenuItemType))]
    public class MenuItemTypeDto: FullAuditedEntityDto<int>
    {
        public string MenuItemType1 { get; set; }
    }
}
