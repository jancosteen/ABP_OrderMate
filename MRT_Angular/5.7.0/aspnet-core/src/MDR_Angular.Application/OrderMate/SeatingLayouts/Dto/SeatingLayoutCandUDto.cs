using Abp.AutoMapper;
using Abp.Domain.Entities;
using MDR_Angular.OrderMate.LayoutTypes;
using MDR_Angular.OrderMate.Restaurants;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace MDR_Angular.OrderMate.SeatingLayouts
{
    [AutoMapFrom(typeof(SeatingLayout))]
    [AutoMapTo(typeof(SeatingLayout))]
    public class SeatingLayoutCandUDto
    {
        //public int SeatingLayoutId { get; set; }
        public int RestaurantIdFk { get; set; }
        public int LayoutTypeIdFk { get; set; }
        public string SeatingLayoutQty { get; set; }

        
    }
}
