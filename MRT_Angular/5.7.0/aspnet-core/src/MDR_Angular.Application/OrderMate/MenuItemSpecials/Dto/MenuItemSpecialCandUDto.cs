﻿using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using System;
using System.Collections.Generic;
using System.Text;

namespace MDR_Angular.OrderMate.MenuItemSpecials.Dto
{
    [AutoMapFrom(typeof(MenuItemSpecial))]
    [AutoMapTo(typeof(MenuItemSpecial))]
    public class MenuItemSpecialCandUDto
    {
        public int SpecialIdFk { get; set; }
        public int MenuItemIdFk { get; set; }
    }
}