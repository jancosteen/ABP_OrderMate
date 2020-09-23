using Abp.Domain.Entities;
using MDR_Angular.OrderMate.EmployeeShifts;
using MDR_Angular.OrderMate.ShiftStatusses;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace MDR_Angular.OrderMate.Shifts
{
    public class Shift: Entity<int>
    {
        //public int ShiftId { get; set; }
        public DateTime ShiftStartDateTime { get; set; }
        public DateTime ShiftEndDateTime { get; set; }
        public int ShiftCapacity { get; set; }
        public string ShiftName { get; set; }
        public int? ShiftStatusIdFk { get; set; }

        [ForeignKey("ShiftStatusIdFk")]
        public virtual ShiftStatus ShiftStatusIdFkNavigation { get; set; }
        public virtual ICollection<EmployeeShift> EmployeeShift { get; set; }
    }
}
