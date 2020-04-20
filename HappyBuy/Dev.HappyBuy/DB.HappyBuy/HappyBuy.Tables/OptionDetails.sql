create table OptionDetails (OptionDetailsId INT NOT NULL PRIMARY KEY, OptionDetailsProductId INT NOT NULL, OptionDetailsOptionId INT NOT NULL,
FOREIGN KEY ([OptionDetailsProductId]) REFERENCES [dbo].[Product] ([ProductId]),
FOREIGN KEY ([OptionDetailsOptionId]) REFERENCES [dbo].[Options] ([OptionId])
)
