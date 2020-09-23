using Abp.Domain.Entities;
using MDR_Angular.OrderMate.QrCodeSeatings;
using MDR_Angular.OrderMate.Restaurants;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace MDR_Angular.OrderMate.QrCodes
{
    public class QrCode: Entity<int>
    {
        //public int QrCodeId { get; set; }
        public int? RestaurantIdFk { get; set; }

        [ForeignKey("RestaurantIdFk")]
        public virtual Restaurant RestaurantIdFkNavigation { get; set; }
        public virtual ICollection<QrCodeSeating> QrCodeSeating { get; set; }
    }
}
