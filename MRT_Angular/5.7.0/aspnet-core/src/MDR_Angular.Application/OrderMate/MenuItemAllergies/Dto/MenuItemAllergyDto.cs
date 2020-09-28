using Abp.Application.Services.Dto;
using Abp.AutoMapper;


namespace MDR_Angular.OrderMate.MenuItemAllergies.Dto
{
    [AutoMapFrom(typeof(MenuItemAllergy))]
    [AutoMapTo(typeof(MenuItemAllergy))]
    public class MenuItemAllergyDto:FullAuditedEntityDto<int>
    {
        public int MenuItemIdFk { get; set; }
        public int AllergyIdFk { get; set; }
    }
}
