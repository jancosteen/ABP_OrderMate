using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Abp.Authorization;
using Abp.Domain.Repositories;
using MDR_Angular.Authorization;
using System;
using System.Collections.Generic;
using System.Text;

namespace MDR_Angular.OrderMate.QrCodes
{
    [AbpAuthorize(PermissionNames.Pages_QC)]
    public class QrCodeAppService : AsyncCrudAppService<
        QrCode, QrCodeDto, int, PagedAndSortedResultRequestDto, QrCodeDto>, IQrCodeAppService
    {
        public QrCodeAppService(IRepository<QrCode> repository) : base(repository) { }
    }
}
