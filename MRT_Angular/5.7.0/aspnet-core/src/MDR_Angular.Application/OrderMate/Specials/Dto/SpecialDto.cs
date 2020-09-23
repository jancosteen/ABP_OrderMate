using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using Abp.Domain.Entities;
using MDR_Angular.OrderMate.MenuItemSpecials;
using MDR_Angular.OrderMate.OrderLines;
using MDR_Angular.OrderMate.SpecialPrices;
using System;
using System.Collections.Generic;
using System.Text;

namespace MDR_Angular.OrderMate.Specials
{
    [AutoMapFrom(typeof(Special))]
    [AutoMapTo(typeof(Special))]
    public class SpecialDto: EntityDto<int>
    {
        //public int SpecialId { get; set; }
        public DateTime SpecialStartDate { get; set; }
        public DateTime SpecialEndDate { get; set; }
        public string SpecialName { get; set; }
        public string SpecialDescription { get; set; }

        
    }
}
