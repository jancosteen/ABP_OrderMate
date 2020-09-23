using Abp.Domain.Entities;
using MDR_Angular.OrderMate.Reservations;
using System;
using System.Collections.Generic;
using System.Text;

namespace MDR_Angular.OrderMate.ReservationStatusses
{
    public class ReservationStatus: Entity<int>
    {
        //public int ReservationStatusId { get; set; }
        public string ReservationStatus1 { get; set; }

        public virtual ICollection<Reservation> Reservation { get; set; }
    }
}
