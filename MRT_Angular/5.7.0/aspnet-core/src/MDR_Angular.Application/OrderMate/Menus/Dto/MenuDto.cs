using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using System;
using System.Collections.Generic;
using System.Text;

namespace MDR_Angular.OrderMate.Menus
{
    [AutoMapFrom(typeof(Menu))]
    [AutoMapTo(typeof(Menu))]
    public class MenuDto: FullAuditedEntityDto<int>
    {
        public string MenuName { get; set; }
        public string MenuDescription { get; set; }
        public DateTime MenuDateCreated { get; set; }
        public TimeSpan? MenuTimeActiveFrom { get; set; }
        public TimeSpan? MenuTimeActiveTo { get; set; }
    }
}
