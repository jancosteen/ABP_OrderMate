using Abp.Application.Services;
using System;
using System.Collections.Generic;
using System.Text;

namespace MDR_Angular.OrderMate.AttendanceSheets
{
    public interface IAttendanceSheetAppService: IAsyncCrudAppService<AttendanceSheetDto>
    {
    }
}
