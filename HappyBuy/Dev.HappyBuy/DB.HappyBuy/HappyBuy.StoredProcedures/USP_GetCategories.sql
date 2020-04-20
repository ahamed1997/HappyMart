CREATE PROCEDURE [dbo].[USP_GetCategories]
AS
BEGIN
	SELECT CategoryId,CategoryName from Category
END
